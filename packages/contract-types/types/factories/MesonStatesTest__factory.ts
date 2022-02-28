/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MesonStatesTest,
  MesonStatesTestInterface,
} from "../MesonStatesTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    name: "addSupportToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    name: "addressOfIndex",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
      {
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
      },
    ],
    name: "balanceIndexFrom",
    outputs: [
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "checkReleaseSignature",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "checkRequestSignature",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "balanceIndex",
        type: "uint48",
      },
    ],
    name: "decodeBalanceIndex",
    outputs: [
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
      {
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint240",
        name: "lockedSwap",
        type: "uint240",
      },
    ],
    name: "decodeLockedSwap",
    outputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
      },
      {
        internalType: "uint256",
        name: "until",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint200",
        name: "postedSwap",
        type: "uint200",
      },
    ],
    name: "decodePostedSwap",
    outputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
      },
    ],
    name: "decodeSwap",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeToMeson",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "salt",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "expireTs",
        type: "uint256",
      },
      {
        internalType: "bytes2",
        name: "inChain",
        type: "bytes2",
      },
      {
        internalType: "uint8",
        name: "inTokenIndex",
        type: "uint8",
      },
      {
        internalType: "bytes2",
        name: "outChain",
        type: "bytes2",
      },
      {
        internalType: "uint8",
        name: "outTokenIndex",
        type: "uint8",
      },
      {
        internalType: "bytes6",
        name: "balanceIndexForMeson",
        type: "bytes6",
      },
      {
        internalType: "bytes6",
        name: "outTokenBalanceIndex",
        type: "bytes6",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "amount",
        type: "uint96",
      },
      {
        internalType: "uint32",
        name: "salt",
        type: "uint32",
      },
      {
        internalType: "uint40",
        name: "fee",
        type: "uint40",
      },
      {
        internalType: "uint40",
        name: "expireTs",
        type: "uint40",
      },
      {
        internalType: "bytes2",
        name: "outChain",
        type: "bytes2",
      },
      {
        internalType: "uint8",
        name: "outToken",
        type: "uint8",
      },
      {
        internalType: "bytes2",
        name: "inChain",
        type: "bytes2",
      },
      {
        internalType: "uint8",
        name: "inToken",
        type: "uint8",
      },
    ],
    name: "encodeSwap",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getShortCoinType",
    outputs: [
      {
        internalType: "bytes2",
        name: "",
        type: "bytes2",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "indexOfAddress",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "indexOfToken",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "until",
        type: "uint256",
      },
      {
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
    ],
    name: "lockedSwapFrom",
    outputs: [
      {
        internalType: "uint240",
        name: "",
        type: "uint240",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "mesonFeeCollected",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "supportedTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "tokenForIndex",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611408806100206000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c8063b3df5b36116100b2578063eba7fb7711610081578063fa5b31b411610066578063fa5b31b414610507578063ff3787191461063d578063ffd5d2fa1461067657600080fd5b8063eba7fb77146104c7578063f7888aec146104f457600080fd5b8063b3df5b3614610379578063d4f82322146103d4578063db53873c146103e7578063e16a567d1461048e57600080fd5b8063554cad8311610109578063793d1e28116100ee578063793d1e28146102795780639aff57d314610332578063b002249d1461036457600080fd5b8063554cad83146101f05780636a4881dc1461023457600080fd5b80631aba3a551461013b5780631fdafaf41461017d5780632335093c146101925780634f139480146101dd575b600080fd5b610162610149366004610f19565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020015b60405180910390f35b61019061018b366004611072565b6106de565b005b6101cb6101a0366004610f19565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff9091168152602001610174565b6101906101eb366004611013565b6106f2565b6102036101fe36600461117f565b610751565b6040517fffffffffffff00000000000000000000000000000000000000000000000000009091168152602001610174565b610247610242366004610f98565b610771565b6040805173ffffffffffffffffffffffffffffffffffffffff909316835264ffffffffff909116602083015201610174565b61028c6102873660046110c2565b610796565b604080519b8c5260208c019a909a52988a019790975263ffffffff909516606089015260808801939093527fffff00000000000000000000000000000000000000000000000000000000000091821660a088015260ff90811660c0880152911660e0860152166101008401527fffffffffffff00000000000000000000000000000000000000000000000000009081166101208401521661014082015261016001610174565b61034561034036600461113c565b610850565b6040805160ff909316835264ffffffffff909116602083015201610174565b61036c610860565b604051610174919061125e565b6103af610387366004611121565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610174565b6101906103e2366004610f6e565b6109ad565b61045f6103f53660046110e5565b600073ffffffffffffffffffffffffffffffffffffffff821660a084901b78ffffffffff00000000000000000000000000000000000000001660c886901b7fffffffffffffff00000000000000000000000000000000000000000000000000161717949350505050565b6040517dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091168152602001610174565b6104b961049c366004611164565b60281b65ff00000000001660009081526004602052604090205490565b604051908152602001610174565b6040517e3c0000000000000000000000000000000000000000000000000000000000008152602001610174565b6104b9610502366004610f3b565b6109bb565b6106306105153660046111a9565b604080517fffffffffffffffffffffffff000000000000000000000000000000000000000060a08b901b1660208201527fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b16602c8201527fffffffffff00000000000000000000000000000000000000000000000000000060d889811b8216603084015288901b1660358201527fffff000000000000000000000000000000000000000000000000000000000000808716603a8301527fff0000000000000000000000000000000000000000000000000000000000000060f887811b8216603c850152918616603d8401529084901b16603f82015260609101604051602081830303815290604052905098975050505050505050565b60405161017491906112b8565b6103af61064b366004611164565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b6106a6610684366004610fd3565b9069ffffffffffffffffffff60a083901c169064ffffffffff60c884901c1690565b6040805173ffffffffffffffffffffffffffffffffffffffff909416845264ffffffffff909216602084015290820152606001610174565b6106eb8585858585610a49565b5050505050565b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606087901b1660208201526107499087906034016040516020818303038152906040528051906020012086868686610bf5565b505050505050565b64ffffffffff8116602883901b65ff0000000000161760d01b5b92915050565b600080602883901c73ffffffffffffffffffffffffffffffffffffffff165b93915050565b60008060008060008060008060008060006107b18d60a01c90565b9a5060588d901c64ffffffffff16995060598d901c647fffffffff1698506107d98d60801c90565b975060308d901c64ffffffffff1696506107f38d60081c90565b60f01b95508c94506108058d60201c90565b60f01b93506108148d60181c90565b92506108208d60281b90565b60d01b915065ff000000000060108e901b1664ffffffffff8d161760d01b90509295989b509295989b9093969950565b600080602883901c60ff16610790565b606060015b6101008160ff1610156109185760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff16610906578060ff16600114156108af575090565b6108ba60018261132b565b60ff1667ffffffffffffffff8111156108d5576108d56113cc565b6040519080825280602002602001820160405280156108fe578160200160208202803683370190505b509150610918565b806109108161134e565b915050610865565b60015b8160ff168160ff1610156109a85760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff168361095e60018461132b565b60ff16815181106109715761097161139d565b73ffffffffffffffffffffffffffffffffffffffff90921660209283029190910190910152806109a08161134e565b91505061091b565b505090565b6109b78282610da3565b5050565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526001602090815260408083205493851683526002909152812054909160ff169064ffffffffff16801580610a0d575060ff8216155b15610a1d5760009250505061076b565b64ffffffffff1660289190911b65ff000000000016176000908152600460205260409020549392505050565b73ffffffffffffffffffffffffffffffffffffffff8116610acb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064015b60405180910390fd5b6000858152602080822081527f7b521e60f64ab56ff03ddfb26df49be54b20672b7acfffc1adeb256b554ccb258083526040808420815194855292840180825283905260ff8616908401526060830187905260808301869052909160019060a0016020604051602081039080840390855afa158015610b4e573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610bec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610ac2565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116610c72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610ac2565b60008681526020868152604080832082527f245d0b306958178c99fe38132cee72cfd0c1c10b4d7c67cbbd322d6b1af894f9808452818420825194855292840180835283905260ff8616918401919091526060830187905260808301869052909160019060a0016020604051602081039080840390855afa158015610cfb573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610d99576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610ac2565b5050505050505050565b60ff8116610e0d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f43616e6e6f7420757365203020617320746f6b656e20696e64657800000000006044820152606401610ac2565b73ffffffffffffffffffffffffffffffffffffffff9091166000818152600160209081526040808320805460ff9096167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00909616861790559382528190529190912080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b803573ffffffffffffffffffffffffffffffffffffffff81168114610ebe57600080fd5b919050565b80357fffff00000000000000000000000000000000000000000000000000000000000081168114610ebe57600080fd5b803564ffffffffff81168114610ebe57600080fd5b803560ff81168114610ebe57600080fd5b600060208284031215610f2b57600080fd5b610f3482610e9a565b9392505050565b60008060408385031215610f4e57600080fd5b610f5783610e9a565b9150610f6560208401610e9a565b90509250929050565b60008060408385031215610f8157600080fd5b610f8a83610e9a565b9150610f6560208401610f08565b600060208284031215610faa57600080fd5b813578ffffffffffffffffffffffffffffffffffffffffffffffffff81168114610f3457600080fd5b600060208284031215610fe557600080fd5b81357dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81168114610f3457600080fd5b60008060008060008060c0878903121561102c57600080fd5b8635955061103c60208801610e9a565b9450604087013593506060870135925061105860808801610f08565b915061106660a08801610e9a565b90509295509295509295565b600080600080600060a0868803121561108a57600080fd5b8535945060208601359350604086013592506110a860608701610f08565b91506110b660808701610e9a565b90509295509295909350565b600080604083850312156110d557600080fd5b82359150610f6560208401610ef3565b6000806000606084860312156110fa57600080fd5b8335925061110a60208501610ef3565b915061111860408501610e9a565b90509250925092565b60006020828403121561113357600080fd5b610f3482610ef3565b60006020828403121561114e57600080fd5b813565ffffffffffff81168114610f3457600080fd5b60006020828403121561117657600080fd5b610f3482610f08565b6000806040838503121561119257600080fd5b61119b83610f08565b9150610f6560208401610ef3565b600080600080600080600080610100898b0312156111c657600080fd5b88356bffffffffffffffffffffffff811681146111e257600080fd5b9750602089013563ffffffff811681146111fb57600080fd5b965061120960408a01610ef3565b955061121760608a01610ef3565b945061122560808a01610ec3565b935061123360a08a01610f08565b925061124160c08a01610ec3565b915061124f60e08a01610f08565b90509295985092959890939650565b6020808252825182820181905260009190848201906040850190845b818110156112ac57835173ffffffffffffffffffffffffffffffffffffffff168352928401929184019160010161127a565b50909695505050505050565b600060208083528351808285015260005b818110156112e5578581018301518582016040015282016112c9565b818111156112f7576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600060ff821660ff8416808210156113455761134561136e565b90039392505050565b600060ff821660ff8114156113655761136561136e565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea164736f6c6343000806000a";

type MesonStatesTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonStatesTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonStatesTest__factory extends ContractFactory {
  constructor(...args: MesonStatesTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonStatesTest> {
    return super.deploy(overrides || {}) as Promise<MesonStatesTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MesonStatesTest {
    return super.attach(address) as MesonStatesTest;
  }
  connect(signer: Signer): MesonStatesTest__factory {
    return super.connect(signer) as MesonStatesTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonStatesTestInterface {
    return new utils.Interface(_abi) as MesonStatesTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonStatesTest {
    return new Contract(address, _abi, signerOrProvider) as MesonStatesTest;
  }
}
