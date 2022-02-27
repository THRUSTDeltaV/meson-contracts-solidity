import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'

import { solidity, MockProvider } from 'ethereum-waffle';
import { Wallet } from '@ethersproject/wallet'
import { ContractFactory } from '@ethersproject/contracts'
import { AddressZero } from '@ethersproject/constants'
import { Meson, MockToken } from '@mesonfi/contract-types'
import { ERC20 as ERC20Abi, Meson as MesonAbi } from '@mesonfi/contract-abis'

import {
  MesonClient,
  EthersWalletSwapSigner,
  SwapWithSigner,
  SignedSwapRequest,
} from '../src'

import { getPartialSwap } from './shared'

const outChain = '0x003c'
const unsupported = AddressZero

chai.use(chaiAsPromised)
chai.use(solidity)

describe('MesonClient', () => {
  let initiator: Wallet
  let provider: Wallet
  let swapSigner: EthersWalletSwapSigner
  let token: MockToken
  let mesonInstance: Meson
  let mesonClientForInitiator: MesonClient
  let mesonClientForProvider: MesonClient

  beforeEach('deploy Meson contract', async () => {
    const wallets = new MockProvider().getWallets()
    initiator = wallets[1]
    provider = wallets[2]
    swapSigner = new EthersWalletSwapSigner(initiator)

    const tokenFactory = new ContractFactory(ERC20Abi.abi, ERC20Abi.bytecode, wallets[0])
    token = await tokenFactory.deploy('MockToken', 'MT', 1000000) as MockToken
    await token.transfer(initiator.address, 1000)
    await token.transfer(provider.address, 10000)

    const mesonFactory = new ContractFactory(MesonAbi.abi, MesonAbi.bytecode, wallets[0])
    mesonInstance = await mesonFactory.deploy([token.address]) as Meson
    mesonClientForInitiator = await MesonClient.Create(mesonInstance.connect(initiator), swapSigner)
    mesonClientForProvider = await MesonClient.Create(mesonInstance.connect(provider))
  })

  describe('#shortCoinType', () => {
    it('returns the shortCoinType', () => {
      expect(mesonClientForInitiator.shortCoinType).to.equal('0x003c')
      expect(mesonClientForProvider.shortCoinType).to.equal('0x003c')
    })
  })

  describe('#token', () => {
    it('rejects 0 or undefined index', () => {
      expect(() => mesonClientForInitiator.token()).to.throw('Token index cannot be zero')
      expect(() => mesonClientForInitiator.token(0)).to.throw('Token index cannot be zero')
    })
    it('returns token for an in-range index', () => {
      expect(mesonClientForInitiator.token(1)).to.equal(token.address.toLowerCase())
    })
    it('returns undefined for out-of-range index', () => {
      expect(mesonClientForInitiator.token(2)).to.equal('')
    })
  })

  describe('#requestSwap', () => {
    it('rejects if swap signer is not set', async () => {
      const mesonClientForProvider = await MesonClient.Create(mesonInstance)
      expect(() => mesonClientForProvider.requestSwap(getPartialSwap(), outChain))
        .to.throw('No swap signer assigned')
    })
    it('returns a SwapWithSigner if swap signer is set', () => {
      const swap = mesonClientForInitiator.requestSwap(getPartialSwap(), outChain)
      expect(swap).to.be.an.instanceof(SwapWithSigner)
    })
  })

  describe('#depositAndRegister', () => {
    it('rejects unsupported token', async () => {
      await expect(mesonClientForProvider.depositAndRegister(unsupported, '100', '1'))
        .to.be.rejectedWith('Token not supported')
    })
    it('accepts a supported token deposit', async () => {
      await token.connect(provider).approve(mesonInstance.address, 100)
      await mesonClientForProvider.depositAndRegister(token.address, '100', '1')
    })
  })

  describe('#deposit', () => {
    it('rejects unsupported token', async () => {
      await expect(mesonClientForProvider.deposit(unsupported, '1'))
        .to.be.rejectedWith('Token not supported')
    })

    it('accepts a supported token deposit', async () => {
      await token.connect(provider).approve(mesonInstance.address, 100)
      await mesonClientForProvider.depositAndRegister(token.address, '10', '1')
      await mesonClientForProvider.deposit(token.address, '10')
    })
  })

  describe('#postSwap', async () => {
    let signedRequest

    beforeEach('prepare for postSwap', async () => {
      await token.connect(initiator).approve(mesonInstance.address, 100)

      const swap = mesonClientForInitiator.requestSwap(getPartialSwap(), outChain)
      const signedRequestData = await swap.signForRequest(false)
      signedRequest = new SignedSwapRequest(signedRequestData)

      await token.connect(provider).approve(mesonInstance.address, 1)
      await mesonClientForProvider.depositAndRegister(token.address, '1', '1')
    })

    it('rejects unregistered provider', async () => {
      await expect(mesonClientForInitiator.postSwap(signedRequest))
        .to.be.rejectedWith(/not registered/)
    })

    it('accepts unregistered provider', async () => {
      await mesonClientForProvider.postSwap(signedRequest)
    })
  })

  describe('#lock', async () => {
    let signedRequest

    beforeEach('prepare for lock', async () => {
      const swap = mesonClientForInitiator.requestSwap(getPartialSwap(), outChain)
      const signedRequestData = await swap.signForRequest(false)
      signedRequest = new SignedSwapRequest(signedRequestData)

      await token.connect(provider).approve(mesonInstance.address, 100)
      await mesonClientForProvider.depositAndRegister(token.address, '100', '1')
    })

    it('locks a swap', async () => {
      await mesonClientForProvider.lock(signedRequest)
    })
  })

  describe('#unlock', async () => {
    let signedRequest

    beforeEach('prepare for lock', async () => {
      const swap = mesonClientForInitiator.requestSwap(getPartialSwap(), outChain)
      const signedRequestData = await swap.signForRequest(false)
      signedRequest = new SignedSwapRequest(signedRequestData)

      await token.connect(provider).approve(mesonInstance.address, 100)
      await mesonClientForProvider.depositAndRegister(token.address, '100', '1')
    })

    it('tries to unlock a swap', async () => {
      await mesonClientForProvider.lock(signedRequest)
      await expect(mesonClientForProvider.unlock(signedRequest))
        .to.be.revertedWith('')
    })
  })

  describe('#release', async () => {
    let signedRequest
    let signedRelease

    beforeEach('prepare for lock', async () => {
      const swapData = getPartialSwap()
      const swap = mesonClientForInitiator.requestSwap(swapData, outChain)
      const signedRequestData = await swap.signForRequest(false)
      signedRequest = new SignedSwapRequest(signedRequestData)
      const signedReleaseData = await swap.signForRelease(swapData.recipient, false)
      signedRelease = new SignedSwapRequest(signedReleaseData)

      await token.connect(provider).approve(mesonInstance.address, 100)
      await mesonClientForProvider.depositAndRegister(token.address, '100', '1')
    })

    it('releases a swap', async () => {
      await mesonClientForProvider.lock(signedRequest)
      await mesonClientForProvider.release(signedRelease)
    })
  })

  describe('#executeSwap', () => {
    let signedRequest
    let signedRelease

    beforeEach('prepare for lock', async () => {
      await token.connect(initiator).approve(mesonInstance.address, 100)

      const swapData = getPartialSwap()
      const swap = mesonClientForInitiator.requestSwap(swapData, outChain)
      const signedRequestData = await swap.signForRequest(false)
      signedRequest = new SignedSwapRequest(signedRequestData)
      const signedReleaseData = await swap.signForRelease(swapData.recipient, false)
      signedRelease = new SignedSwapRequest(signedReleaseData)

      await token.connect(provider).approve(mesonInstance.address, 1)
      await mesonClientForProvider.depositAndRegister(token.address, '1', '1')
    })

    it('releases a swap', async () => {
      await mesonClientForProvider.postSwap(signedRequest)
      await mesonClientForProvider.executeSwap(signedRelease, true)
    })
  })

  describe('#cancelSwap', () => {
    let signedRequest

    beforeEach('prepare for lock', async () => {
      await token.connect(initiator).approve(mesonInstance.address, 100)

      const swap = mesonClientForInitiator.requestSwap(getPartialSwap(), outChain)
      const signedRequestData = await swap.signForRequest(false)
      signedRequest = new SignedSwapRequest(signedRequestData)

      await token.connect(provider).approve(mesonInstance.address, 1)
      await mesonClientForProvider.depositAndRegister(token.address, '1', '1')
    })

    it('releases a swap', async () => {
      await mesonClientForProvider.postSwap(signedRequest)
      await expect(mesonClientForProvider.cancelSwap(signedRequest))
        .to.be.revertedWith('')
    })
  })

  describe('#getPostedSwap', () => {
    it('rejects invalid encoded', async () => {
      await expect(mesonClientForInitiator.getPostedSwap(''))
        .to.be.rejectedWith(/Invalid encoded\./)
    })
  })

  describe('#getLockedSwap', () => {
    it('rejects Caller not registered', async () => {
    })
  })
})
