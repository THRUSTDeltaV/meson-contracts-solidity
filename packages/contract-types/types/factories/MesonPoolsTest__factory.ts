/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MesonPoolsTest,
  MesonPoolsTestInterface,
} from "../MesonPoolsTest";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "provider",
        type: "address",
      },
    ],
    name: "SwapLocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "SwapReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "addTokenToSwapList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
    inputs: [],
    name: "challenge",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCoinType",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "hasLockingSwap",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "lockingSwaps",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "until",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "metaAmount",
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
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "supportedTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "totalDemandFor",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "totalSupplyFor",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x610100604052605260808181529061140a60a039805160209182012060408051808201825260088152674d65736f6e20466960c01b908401528051808201825260018152603160f81b908401528051928301919091527fe127d7b8d403871d7ed6b19024db4422e92aee79823ba78ad61e52ee2a5f9b98908201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c001604051602081830303815290604052805190602001206000553480156100d457600080fd5b50611326806100e46000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063a8f81b1a1161008c578063d2ef739811610066578063d2ef739814610102578063ec9b5b3a14610295578063f3fef3a3146102a8578063f7888aec146102bb57600080fd5b8063a8f81b1a14610246578063c6aea8c71461026f578063d23d1c761461028257600080fd5b806361565d25116100c857806361565d251461012a57806368c4ac26146101665780636bb39ae01461019957806394149c1a1461023157600080fd5b806347e7ef24146100ef5780634a198f2c146101045780634e1389ed14610117575b600080fd5b6101026100fd36600461115f565b6102e6565b005b6101026101123660046111c4565b610399565b61010261012536600461121b565b610647565b61015361013836600461110a565b6001600160a01b031660009081526004602052604090205490565b6040519081526020015b60405180910390f35b61018961017436600461110a565b60016020526000908152604090205460ff1681565b604051901515815260200161015d565b6101ee6101a73660046111ab565b6007602052600090815260409020805460018201546002830154600384015460048501546005909501546001600160a01b0394851695938516949283169391929091169086565b604080516001600160a01b0397881681529587166020870152938616938501939093526060840191909152909216608082015260a081019190915260c00161015d565b604051632000000f60e21b815260200161015d565b61015361025436600461110a565b6001600160a01b031660009081526005602052604090205490565b61018961027d3660046111ab565b610889565b61010261029036600461110a565b6108a4565b6101026102a33660046111ab565b6108b0565b6101026102b636600461115f565b610a70565b6101536102c936600461112c565b600660209081526000928352604080842090915290825290205481565b6001600160a01b038216600090815260016020526040902054829060ff166103295760405162461bcd60e51b8152600401610320906112a9565b60405180910390fd5b6001600160a01b0383166000908152600660209081526040808320338085529252909120546103589084610ac1565b6001600160a01b038086166000908152600660209081526040808320938616835292905220556103888484610adc565b610393848285610b1f565b50505050565b6001600160a01b038216600090815260016020526040902054829060ff166103d35760405162461bcd60e51b8152600401610320906112a9565b600084116104235760405162461bcd60e51b815260206004820181905260248201527f616d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610320565b600086815260076020526040902060030154156104825760405162461bcd60e51b815260206004820152601b60248201527f6c6f636b696e67207377617020616c72656164792065786973747300000000006044820152606401610320565b6001600160a01b0383166000908152600660209081526040808320338085529252909120548511156104ed5760405162461bcd60e51b8152602060048201526014602482015273696e73756666696369656e742062616c616e636560601b6044820152606401610320565b6001600160a01b0380851660009081526006602090815260408083209385168352929052205461051e9086906112ec565b6001600160a01b0380861660008181526006602090815260408083208786168085529083529281902095909555845160c0810186528b851681529081019190915292830152606082018790528416608082015260a081016105816104b0426112d4565b9052600088815260076020908152604091829020835181546001600160a01b03199081166001600160a01b0392831617835585840151600184018054831691841691909117905585850151600284018054831691841691909117905560608601516003840155608086015160048401805490921690831617905560a09094015160059091015581518a8152928416908301527faad18fe672f0d6b379db88b0e1176f10cc003e9a4d8ed142a90c0b6f8bedb8de910160405180910390a150505050505050565b6000858152600760208181526040808420815160c08101835281546001600160a01b039081168252600183015481168286015260028301548116938201939093526003820154606082018190526004830154909316608082015260059091015460a0820152938990529190526106f55760405162461bcd60e51b81526020600482015260136024820152721cddd85c08191bd95cc81b9bdd08195e1a5cdd606a1b6044820152606401610320565b80606001518511156107665760405162461bcd60e51b815260206004820152603460248201527f72656c6561736520616d6f756e742063616e6e6f742062652067726561746572604482015273081d1a185b881b1bd8dada5b99c8185b5bdd5b9d60621b6064820152608401610320565b610777868260000151868686610ba7565b60408101516020820151608083015160608401518810156107f8576001600160a01b0380841660009081526006602090815260408083209386168352929052205460608501516107d191906107cc908b610d80565b610ac1565b6001600160a01b038085166000908152600660209081526040808320938716835292905220555b600089815260076020526040812080546001600160a01b0319908116825560018201805482169055600282018054821690556003820183905560048201805490911690556005015561084b83828a610d9b565b6040518981527fe8aa10932e72fe72aa2f3879a4dd799b95f5fbe728be1be0609e5baa14ec40f49060200160405180910390a1505050505050505050565b60008181526007602052604081206003015415155b92915050565b6108ad81610ed8565b50565b6000818152600760205260409020600301546109045760405162461bcd60e51b81526020600482015260136024820152721cddd85c08191bd95cc81b9bdd08195e1a5cdd606a1b6044820152606401610320565b600081815260076020908152604091829020825160c08101845281546001600160a01b0390811682526001830154811693820193909352600282015483169381019390935260038101546060840152600481015490911660808301526005015460a0820181905242116109b95760405162461bcd60e51b815260206004820152601960248201527f5468652073776170206973207374696c6c20696e206c6f636b000000000000006044820152606401610320565b60408082015160608301516020808501516001600160a01b038085166000908152600684528681209183168152925293902054919290916109fa9083610ac1565b6001600160a01b039384166000908152600660209081526040808320949096168252928352848120919091559485526007905250822080546001600160a01b0319908116825560018201805482169055600282018054821690556003820184905560048201805490911690556005019190915550565b6001600160a01b038216600090815260016020526040902054829060ff16610aaa5760405162461bcd60e51b8152600401610320906112a9565b33610ab58484610f55565b61039381828686610fcc565b600082610ace83826112d4565b915081101561089e57600080fd5b6001600160a01b038216600090815260046020526040902054610aff9082610ac1565b6001600160a01b0390921660009081526004602052604090209190915550565b6040516323b872dd60e01b81526001600160a01b038381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b158015610b6f57600080fd5b505af1158015610b83573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103939190611189565b6001600160a01b038416610bfd5760405162461bcd60e51b815260206004820152601e60248201527f7369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610320565b604080518082018252601b81527f5377617052656c656173652862797465733332207377617049642900000000006020918201529051600091610c6d917ffb1f98601c589a04e2ceca199119c17bd547893fffb8d088acdae5aff4f9b19d91899101918252602082015260400190565b6040516020818303038152906040528051906020012090506000805482604051602001610cb192919061190160f01b81526002810192909252602282015260420190565b60408051601f1981840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa158015610d19573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b031614610d775760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b6044820152606401610320565b50505050505050565b600082610d8d83826112ec565b915081111561089e57600080fd5b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b17905291516000928392871691610e27919061126e565b6000604051808303816000865af19150503d8060008114610e64576040519150601f19603f3d011682016040523d82523d6000602084013e610e69565b606091505b5091509150818015610e93575080511580610e93575080806020019051810190610e939190611189565b610ed15760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b6044820152606401610320565b5050505050565b6001600160a01b0381166000818152600160208181526040808420805460ff19168417905580516080810182528481528083018581528183018681526060838101818152988852600380875294909720835181559151958201959095559351600285015594518051949594610ed19392850192919091019061108e565b6001600160a01b038216600090815260046020526040902054811115610fa95760405162461bcd60e51b815260206004820152600960248201526837bb32b9323930bbb760b91b6044820152606401610320565b6001600160a01b038216600090815260046020526040902054610aff9082610d80565b6001600160a01b0380831660009081526006602090815260408083209387168352929052205481111561102d5760405162461bcd60e51b815260206004820152600960248201526837bb32b9323930bbb760b91b6044820152606401610320565b6001600160a01b0380831660009081526006602090815260408083209387168352929052205461105d9082610d80565b6001600160a01b03808416600090815260066020908152604080832093881683529290522055610393828583610d9b565b8280548282559060005260206000209081019282156110c9579160200282015b828111156110c95782518255916020019190600101906110ae565b506110d59291506110d9565b5090565b5b808211156110d557600081556001016110da565b80356001600160a01b038116811461110557600080fd5b919050565b60006020828403121561111c57600080fd5b611125826110ee565b9392505050565b6000806040838503121561113f57600080fd5b611148836110ee565b9150611156602084016110ee565b90509250929050565b6000806040838503121561117257600080fd5b61117b836110ee565b946020939093013593505050565b60006020828403121561119b57600080fd5b8151801515811461112557600080fd5b6000602082840312156111bd57600080fd5b5035919050565b600080600080600060a086880312156111dc57600080fd5b853594506111ec602087016110ee565b935060408601359250611201606087016110ee565b915061120f608087016110ee565b90509295509295909350565b600080600080600060a0868803121561123357600080fd5b85359450602086013593506040860135925060608601359150608086013560ff8116811461126057600080fd5b809150509295509295909350565b6000825160005b8181101561128f5760208186018101518583015201611275565b8181111561129e576000828501525b509190910192915050565b6020808252601190820152703ab739bab83837b93a32b2103a37b5b2b760791b604082015260600190565b600082198211156112e7576112e7611303565b500190565b6000828210156112fe576112fe611303565b500390565b634e487b7160e01b600052601160045260246000fdfea164736f6c6343000806000a454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

type MesonPoolsTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonPoolsTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonPoolsTest__factory extends ContractFactory {
  constructor(...args: MesonPoolsTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonPoolsTest> {
    return super.deploy(overrides || {}) as Promise<MesonPoolsTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MesonPoolsTest {
    return super.attach(address) as MesonPoolsTest;
  }
  connect(signer: Signer): MesonPoolsTest__factory {
    return super.connect(signer) as MesonPoolsTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonPoolsTestInterface {
    return new utils.Interface(_abi) as MesonPoolsTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonPoolsTest {
    return new Contract(address, _abi, signerOrProvider) as MesonPoolsTest;
  }
}