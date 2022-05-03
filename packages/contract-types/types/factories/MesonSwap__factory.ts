/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MesonSwap, MesonSwapInterface } from "../MesonSwap";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapBonded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapPosted",
    type: "event",
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
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
      },
    ],
    name: "bondSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "cancelSwap",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "bool",
        name: "depositToPool",
        type: "bool",
      },
    ],
    name: "executeSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "getPostedSwap",
    outputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
        internalType: "uint200",
        name: "postingValue",
        type: "uint200",
      },
    ],
    name: "postSwap",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b50611bcc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80638302ce5a1161008c578063e16a567d11610066578063e16a567d14610277578063eba7fb77146102b0578063f7888aec146102dd578063ff378719146102f057600080fd5b80638302ce5a146101f4578063b002249d14610207578063b3df5b361461021c57600080fd5b806335eff30f116100bd57806335eff30f146101b95780634d11b0f1146101ce57806354d6a2b7146101e157600080fd5b80631aba3a55146100e45780631e2a6075146101265780632335093c1461016e575b600080fd5b61010b6100f2366004611861565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020015b60405180910390f35b6101396101343660046118d3565b610329565b6040805173ffffffffffffffffffffffffffffffffffffffff948516815293909216602084015215159082015260600161011d565b6101a761017c366004611861565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff909116815260200161011d565b6101cc6101c73660046119c1565b6103bb565b005b6101cc6101dc3660046118ec565b61057d565b6101cc6101ef3660046118d3565b610806565b6101cc61020236600461194f565b610998565b61020f610caf565b60405161011d9190611a55565b61025261022a3660046119e4565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161011d565b6102a26102853660046119ff565b60281b65ff00000000001660009081526004602052604090205490565b60405190815260200161011d565b6040517e3c000000000000000000000000000000000000000000000000000000000000815260200161011d565b6102a26102eb366004611883565b610dfc565b6102526102fe3660046119ff565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600081815260056020526040812054602881901c73ffffffffffffffffffffffffffffffffffffffff16919078ffffffffffffffffffffffffffffffffffffffffffffffffff1660018114908361038357600092506103b3565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1692505b509193909250565b60008281526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff166001811161043a5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064015b60405180910390fd5b8064ffffffffff161561048f5760405162461bcd60e51b815260206004820152601f60248201527f5377617020626f6e64656420746f20616e6f746865722070726f7669646572006044820152606401610431565b3360009081526002602052604090205464ffffffffff8381169116146104f75760405162461bcd60e51b815260206004820152601860248201527f43616e206f6e6c7920626f756e6420746f207369676e657200000000000000006044820152606401610431565b60008381526005602052604080822080547fffffffffffffff000000000000000000000000000000000000000000000000001664ffffffffff861678ffffffffffffffffffffffffffffffffffffffffffffffffff8616171790555184917f60a99b51ae498c44acbbe11031aed2a06a32be66d2122e6e2a7a16c087865cc991a2505050565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16600181116105f75760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610431565b610603610e1042611aaf565b603088901c64ffffffffff16101561064e57600087815260056020526040902080547fffffffffffffff00000000000000000000000000000000000000000000000000169055610686565b600087815260056020526040902080547fffffffffffffff000000000000000000000000000000000000000000000000001660011790555b6106ae8784888888602887901c73ffffffffffffffffffffffffffffffffffffffff16610e8c565b60006106ba8860281b90565b90506000605889901c64ffffffffff166106d48a60d01c90565b6106de9190611aaf565b90506106ea8960081c90565b61ffff16603c1415801561070c57506107038960201c90565b61ffff16603c14155b1561075f57643fffffffff605a8a901c16801561075d5765ffffffffffff83166000908152600460205260408120805483929061074a908490611aaf565b9091555061075a90508183611ac7565b91505b505b83156107a65764ffffffffff831665ffffffffffff83168117600090815260046020526040812080549285179284929061079a908490611aaf565b909155506107fb915050565b60ff8981166000818152602081815260408083205464ffffffffff891684526003909252909120548c936107f99373ffffffffffffffffffffffffffffffffffffffff93841693909216918691146111ef565b505b505050505050505050565b60008181526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16600181116108805760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610431565b42603083901c64ffffffffff16106108da5760405162461bcd60e51b815260206004820152601460248201527f53776170206973207374696c6c206c6f636b65640000000000000000000000006044820152606401610431565b600082815260056020908152604080832080547fffffffffffffff0000000000000000000000000000000000000000000000000016905560ff851683529082905290205482906109689073ffffffffffffffffffffffffffffffffffffffff90811690602885901c1661095c605885901c64ffffffffff1660d086901c611aaf565b8460ff1660ff146111ef565b60405183907ff6b6b4f7a13f02512c1b3aa8dcc4a07d7775a6a4becbd439efcbd37c5408e67f90600090a2505050565b84603c6109a58260081c90565b61ffff16146109f65760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e0000000000000000006044820152606401610431565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff1615610a6d5760405162461bcd60e51b815260206004820152601360248201527f5377617020616c726561647920657869737473000000000000000000000000006044820152606401610431565b6000610a798760d01c90565b905064174876e800811115610af65760405162461bcd60e51b815260206004820152603760248201527f466f7220736563757269747920726561736f6e2c20616d6f756e742063616e6e60448201527f6f742062652067726561746572207468616e203130306b0000000000000000006064820152608401610431565b6000610b0d4264ffffffffff60308b901c16611ac7565b9050610e108111610b605760405162461bcd60e51b815260206004820152601360248201527f45787069726520747320746f6f206561726c79000000000000000000000000006044820152606401610431565b611c208110610bb15760405162461bcd60e51b815260206004820152601260248201527f45787069726520747320746f6f206c61746500000000000000000000000000006044820152606401610431565b73ffffffffffffffffffffffffffffffffffffffff602885901c16610bd9898989898561133e565b600089815260056020908152604080832080547fffffffffffffff000000000000000000000000000000000000000000000000001678ffffffffffffffffffffffffffffffffffffffffffffffffff8a1617905560ff8c168352908290529020548990610c789073ffffffffffffffffffffffffffffffffffffffff1683610c6c605885901c64ffffffffff1688611aaf565b8460ff1660ff1461160a565b6040518a907f5ce4019f772fda6cb703b26bce3ec3006eb36b73f1d3a0eb441213317d9f5e9d90600090a250505050505050505050565b606060015b6101008160ff161015610d675760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff16610d55578060ff1660011415610cfe575090565b610d09600182611ade565b60ff1667ffffffffffffffff811115610d2457610d24611b7f565b604051908082528060200260200182016040528015610d4d578160200160208202803683370190505b509150610d67565b80610d5f81611b01565b915050610cb4565b60015b8160ff168160ff161015610df75760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1683610dad600184611ade565b60ff1681518110610dc057610dc0611b50565b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015280610def81611b01565b915050610d6a565b505090565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526001602090815260408083205493851683526002909152812054909160ff169064ffffffffff16801580610e4e575060ff8216155b15610e5e57600092505050610e86565b64ffffffffff1660289190911b65ff0000000000161760009081526004602052604090205490505b92915050565b73ffffffffffffffffffffffffffffffffffffffff8116610eef5760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610431565b610ef98660081c90565b61ffff1660c31415611077576040517f1954524f4e205369676e6564204d6573736167653a0a33320a000000000000006020820152603981018790527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606087901b166059820152600090606d01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa158015610fed573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146110715760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610431565b506111e7565b60006110838760201c90565b61ffff1660c314156110d4578560155260416020538660005260356000206020527ff6ea10de668a877958d46ed7d53eaf47124fda9bee9423390a28c203556a2e556000526040600020905061110e565b5060148590526000868152603481206020527f743e50106a7f059b52151dd4ba27a5f6c87b925ddfbdcf1c332e800da4b3df928152604090205b60408051600081526020810180835283905260ff851691810191909152606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611161573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146111e55760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610431565b505b505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8581166024830152604480830186905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905291516000928392908816916112869190611a1a565b6000604051808303816000865af19150503d80600081146112c3576040519150601f19603f3d011682016040523d82523d6000602084013e6112c8565b606091505b50915091508180156112f25750805115806112f25750808060200190518101906112f291906118b6565b6111e75760405162461bcd60e51b815260206004820152600f60248201527f7472616e73666572206661696c656400000000000000000000000000000000006044820152606401610431565b73ffffffffffffffffffffffffffffffffffffffff81166113a15760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610431565b6113ab8560081c90565b61ffff1660c314156114fd576040517f1954524f4e205369676e6564204d6573736167653a0a33320a00000000000000602082015260398101869052600090605901604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa158015611473573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146114f75760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610431565b50611603565b6000858152602080822081527f9862d877599564bcd97c37305a7b0fdbe621d9c2a125026f2ad601f754a75abc8083526040808420815194855292840180825283905260ff86169084015260608301879052608083018690529160019060a0016020604051602081039080840390855afa15801561157f573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146111e55760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610431565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff841661166d5760405162461bcd60e51b815260206004820152601360248201527f546f6b656e206e6f7420737570706f72746564000000000000000000000000006044820152606401610431565b600082116116bd5760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610431565b6040805173ffffffffffffffffffffffffffffffffffffffff8581166024830152306044830152606480830186905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000179052915160009283929088169161175a9190611a1a565b6000604051808303816000865af19150503d8060008114611797576040519150601f19603f3d011682016040523d82523d6000602084013e61179c565b606091505b50915091508180156117c65750805115806117c65750808060200190518101906117c691906118b6565b6111e75760405162461bcd60e51b815260206004820152601360248201527f7472616e7366657246726f6d206661696c6564000000000000000000000000006044820152606401610431565b803573ffffffffffffffffffffffffffffffffffffffff8116811461183657600080fd5b919050565b803564ffffffffff8116811461183657600080fd5b803560ff8116811461183657600080fd5b60006020828403121561187357600080fd5b61187c82611812565b9392505050565b6000806040838503121561189657600080fd5b61189f83611812565b91506118ad60208401611812565b90509250929050565b6000602082840312156118c857600080fd5b815161187c81611bae565b6000602082840312156118e557600080fd5b5035919050565b60008060008060008060c0878903121561190557600080fd5b86359550602087013594506040870135935061192360608801611850565b925061193160808801611812565b915060a087013561194181611bae565b809150509295509295509295565b600080600080600060a0868803121561196757600080fd5b85359450602086013593506040860135925061198560608701611850565b9150608086013578ffffffffffffffffffffffffffffffffffffffffffffffffff811681146119b357600080fd5b809150509295509295909350565b600080604083850312156119d457600080fd5b823591506118ad6020840161183b565b6000602082840312156119f657600080fd5b61187c8261183b565b600060208284031215611a1157600080fd5b61187c82611850565b6000825160005b81811015611a3b5760208186018101518583015201611a21565b81811115611a4a576000828501525b509190910192915050565b6020808252825182820181905260009190848201906040850190845b81811015611aa357835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101611a71565b50909695505050505050565b60008219821115611ac257611ac2611b21565b500190565b600082821015611ad957611ad9611b21565b500390565b600060ff821660ff841680821015611af857611af8611b21565b90039392505050565b600060ff821660ff811415611b1857611b18611b21565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b8015158114611bbc57600080fd5b5056fea164736f6c6343000806000a";

type MesonSwapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonSwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonSwap__factory extends ContractFactory {
  constructor(...args: MesonSwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonSwap> {
    return super.deploy(overrides || {}) as Promise<MesonSwap>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MesonSwap {
    return super.attach(address) as MesonSwap;
  }
  connect(signer: Signer): MesonSwap__factory {
    return super.connect(signer) as MesonSwap__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonSwapInterface {
    return new utils.Interface(_abi) as MesonSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonSwap {
    return new Contract(address, _abi, signerOrProvider) as MesonSwap;
  }
}
