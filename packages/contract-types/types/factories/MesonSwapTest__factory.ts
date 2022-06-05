/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MesonSwapTest, MesonSwapTestInterface } from "../MesonSwapTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [
      {
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
      },
    ],
    name: "register",
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
  "0x60806040523480156200001157600080fd5b50604051620020ca380380620020ca8339810160408190526200003491620000e7565b6200004181600162000048565b5062000119565b60ff81166200009d5760405162461bcd60e51b815260206004820152601b60248201527f43616e6e6f7420757365203020617320746f6b656e20696e6465780000000000604482015260640160405180910390fd5b6001600160a01b039091166000818152600160209081526040808320805460ff90961660ff19909616861790559382528190529190912080546001600160a01b0319169091179055565b600060208284031215620000fa57600080fd5b81516001600160a01b03811681146200011257600080fd5b9392505050565b611fa180620001296000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c80638302ce5a1161008c578063e16a567d11610066578063e16a567d14610294578063eba7fb77146102cd578063f7888aec146102fa578063ff3787191461030d57600080fd5b80638302ce5a14610211578063b002249d14610224578063b3df5b361461023957600080fd5b80632335093c116100c85780632335093c1461018d57806335eff30f146101d85780634d11b0f1146101eb57806354d6a2b7146101fe57600080fd5b806207f5fd146100ee5780631aba3a55146101035780631e2a607514610145575b600080fd5b6101016100fc366004611db9565b610346565b005b61012a610111366004611c36565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020015b60405180910390f35b610158610153366004611ca8565b610526565b6040805173ffffffffffffffffffffffffffffffffffffffff948516815293909216602084015215159082015260600161013c565b6101c661019b366004611c36565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff909116815260200161013c565b6101016101e6366004611d96565b6105b8565b6101016101f9366004611cc1565b610775565b61010161020c366004611ca8565b6109fe565b61010161021f366004611d24565b610b90565b61022c610ea7565b60405161013c9190611e2a565b61026f610247366004611db9565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161013c565b6102bf6102a2366004611dd4565b60281b65ff00000000001660009081526004602052604090205490565b60405190815260200161013c565b6040517e3c000000000000000000000000000000000000000000000000000000000000815260200161013c565b6102bf610308366004611c58565b610ff4565b61026f61031b366004611dd4565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b3364ffffffffff82166103a05760405162461bcd60e51b815260206004820152601260248201527f43616e6e6f742075736520696e6465782030000000000000000000000000000060448201526064015b60405180910390fd5b64ffffffffff821660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff161561041a5760405162461bcd60e51b815260206004820152601860248201527f496e64657820616c7265616479207265676973746572656400000000000000006044820152606401610397565b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604090205464ffffffffff16156104945760405162461bcd60e51b815260206004820152601a60248201527f4164647265737320616c726561647920726567697374657265640000000000006044820152606401610397565b64ffffffffff9091166000818152600360209081526040808320805473ffffffffffffffffffffffffffffffffffffffff9096167fffffffffffffffffffffffff000000000000000000000000000000000000000090961686179055938252600290529190912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000169091179055565b600081815260056020526040812054602881901c73ffffffffffffffffffffffffffffffffffffffff16919078ffffffffffffffffffffffffffffffffffffffffffffffffff1660018114908361058057600092506105b0565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1692505b509193909250565b60008281526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16600181116106325760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610397565b8064ffffffffff16156106875760405162461bcd60e51b815260206004820152601f60248201527f5377617020626f6e64656420746f20616e6f746865722070726f7669646572006044820152606401610397565b3360009081526002602052604090205464ffffffffff8381169116146106ef5760405162461bcd60e51b815260206004820152601860248201527f43616e206f6e6c7920626f756e6420746f207369676e657200000000000000006044820152606401610397565b60008381526005602052604080822080547fffffffffffffff000000000000000000000000000000000000000000000000001664ffffffffff861678ffffffffffffffffffffffffffffffffffffffffffffffffff8616171790555184917f60a99b51ae498c44acbbe11031aed2a06a32be66d2122e6e2a7a16c087865cc991a2505050565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16600181116107ef5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610397565b6107fb610e1042611e84565b603088901c64ffffffffff16101561084657600087815260056020526040902080547fffffffffffffff0000000000000000000000000000000000000000000000000016905561087e565b600087815260056020526040902080547fffffffffffffff000000000000000000000000000000000000000000000000001660011790555b6108a68784888888602887901c73ffffffffffffffffffffffffffffffffffffffff16611084565b60006108b28860281b90565b90506000605889901c64ffffffffff166108cc8a60d01c90565b6108d69190611e84565b90506108e28960081c90565b61ffff16603c1415801561090457506108fb8960201c90565b61ffff16603c14155b1561095757643fffffffff605a8a901c1680156109555765ffffffffffff831660009081526004602052604081208054839290610942908490611e84565b9091555061095290508183611e9c565b91505b505b831561099e5764ffffffffff831665ffffffffffff831681176000908152600460205260408120805492851792849290610992908490611e84565b909155506109f3915050565b60ff8981166000818152602081815260408083205464ffffffffff891684526003909252909120548c936109f19373ffffffffffffffffffffffffffffffffffffffff938416939092169186911461152d565b505b505050505050505050565b60008181526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff1660018111610a785760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610397565b42603083901c64ffffffffff1610610ad25760405162461bcd60e51b815260206004820152601460248201527f53776170206973207374696c6c206c6f636b65640000000000000000000000006044820152606401610397565b600082815260056020908152604080832080547fffffffffffffff0000000000000000000000000000000000000000000000000016905560ff85168352908290529020548290610b609073ffffffffffffffffffffffffffffffffffffffff90811690602885901c16610b54605885901c64ffffffffff1660d086901c611e84565b8460ff1660ff1461152d565b60405183907ff6b6b4f7a13f02512c1b3aa8dcc4a07d7775a6a4becbd439efcbd37c5408e67f90600090a2505050565b84603c610b9d8260081c90565b61ffff1614610bee5760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e0000000000000000006044820152606401610397565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff1615610c655760405162461bcd60e51b815260206004820152601360248201527f5377617020616c726561647920657869737473000000000000000000000000006044820152606401610397565b6000610c718760d01c90565b905064174876e800811115610cee5760405162461bcd60e51b815260206004820152603760248201527f466f7220736563757269747920726561736f6e2c20616d6f756e742063616e6e60448201527f6f742062652067726561746572207468616e203130306b0000000000000000006064820152608401610397565b6000610d054264ffffffffff60308b901c16611e9c565b9050610e108111610d585760405162461bcd60e51b815260206004820152601360248201527f45787069726520747320746f6f206561726c79000000000000000000000000006044820152606401610397565b611c208110610da95760405162461bcd60e51b815260206004820152601260248201527f45787069726520747320746f6f206c61746500000000000000000000000000006044820152606401610397565b73ffffffffffffffffffffffffffffffffffffffff602885901c16610dd1898989898561167c565b600089815260056020908152604080832080547fffffffffffffff000000000000000000000000000000000000000000000000001678ffffffffffffffffffffffffffffffffffffffffffffffffff8a1617905560ff8c168352908290529020548990610e709073ffffffffffffffffffffffffffffffffffffffff1683610e64605885901c64ffffffffff1688611e84565b8460ff1660ff146119df565b6040518a907f5ce4019f772fda6cb703b26bce3ec3006eb36b73f1d3a0eb441213317d9f5e9d90600090a250505050505050505050565b606060015b6101008160ff161015610f5f5760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff16610f4d578060ff1660011415610ef6575090565b610f01600182611eb3565b60ff1667ffffffffffffffff811115610f1c57610f1c611f54565b604051908082528060200260200182016040528015610f45578160200160208202803683370190505b509150610f5f565b80610f5781611ed6565b915050610eac565b60015b8160ff168160ff161015610fef5760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1683610fa5600184611eb3565b60ff1681518110610fb857610fb8611f25565b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015280610fe781611ed6565b915050610f62565b505090565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526001602090815260408083205493851683526002909152812054909160ff169064ffffffffff16801580611046575060ff8216155b156110565760009250505061107e565b64ffffffffff1660289190911b65ff0000000000161760009081526004602052604090205490505b92915050565b73ffffffffffffffffffffffffffffffffffffffff81166110e75760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610397565b60ff60c887901c811614600887901c61ffff1660c314156112c45760008161112f577f1954524f4e205369676e6564204d6573736167653a0a33320a00000000000000611151565b7f1954524f4e205369676e6564204d6573736167653a0a35330a000000000000005b6040517fffffffffffffffffffffffffffffffffffffffffffffffffff000000000000009091166020820152603981018990527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606089901b166059820152606d01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8716918301919091526060820188905260808201879052915060019060a0016020604051602081039080840390855afa158015611239573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146112bd5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610397565b5050611525565b600081156113b6576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000009061132f908a908a9060200191825260601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602082015260340190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905280516020918201207fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000090931690820152603c810191909152605c0160405160208183030381529060405280519060200120905061144b565b6113c08860201c90565b61ffff1660c31415611411578660155260416020538760005260356000206020527ff6ea10de668a877958d46ed7d53eaf47124fda9bee9423390a28c203556a2e556000526040600020905061144b565b5060148690526000878152603481206020527fd23291d9d999318ac3ed13f43ac8003d6fbd69a4b532aeec9ffad516010a208c8152604090205b60408051600081526020810180835283905260ff861691810191909152606081018790526080810186905260019060a0016020604051602081039080840390855afa15801561149e573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146115225760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610397565b50505b505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8581166024830152604480830186905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905291516000928392908816916115c49190611def565b6000604051808303816000865af19150503d8060008114611601576040519150601f19603f3d011682016040523d82523d6000602084013e611606565b606091505b50915091508180156116305750805115806116305750808060200190518101906116309190611c8b565b6115255760405162461bcd60e51b815260206004820152600f60248201527f7472616e73666572206661696c656400000000000000000000000000000000006044820152606401610397565b73ffffffffffffffffffffffffffffffffffffffff81166116df5760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610397565b60ff60c886901c811614600886901c61ffff1660c3141561189157600081611727577f1954524f4e205369676e6564204d6573736167653a0a33320a00000000000000611749565b7f1954524f4e205369676e6564204d6573736167653a0a33330a000000000000005b6040517fffffffffffffffffffffffffffffffffffffffffffffffffff000000000000009091166020820152603981018890526059015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8716918301919091526060820188905260808201879052915060019060a0016020604051602081039080840390855afa158015611806573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461188a5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610397565b50506119d8565b80156118d2576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101879052600090605c01611780565b6000868152602080822081527f7b521e60f64ab56ff03ddfb26df49be54b20672b7acfffc1adeb256b554ccb258083526040808420815194855292840180825283905260ff87169084015260608301889052608083018790529160019060a0016020604051602081039080840390855afa158015611954573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146115225760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610397565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff8416611a425760405162461bcd60e51b815260206004820152601360248201527f546f6b656e206e6f7420737570706f72746564000000000000000000000000006044820152606401610397565b60008211611a925760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610397565b6040805173ffffffffffffffffffffffffffffffffffffffff8581166024830152306044830152606480830186905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790529151600092839290881691611b2f9190611def565b6000604051808303816000865af19150503d8060008114611b6c576040519150601f19603f3d011682016040523d82523d6000602084013e611b71565b606091505b5091509150818015611b9b575080511580611b9b575080806020019051810190611b9b9190611c8b565b6115255760405162461bcd60e51b815260206004820152601360248201527f7472616e7366657246726f6d206661696c6564000000000000000000000000006044820152606401610397565b803573ffffffffffffffffffffffffffffffffffffffff81168114611c0b57600080fd5b919050565b803564ffffffffff81168114611c0b57600080fd5b803560ff81168114611c0b57600080fd5b600060208284031215611c4857600080fd5b611c5182611be7565b9392505050565b60008060408385031215611c6b57600080fd5b611c7483611be7565b9150611c8260208401611be7565b90509250929050565b600060208284031215611c9d57600080fd5b8151611c5181611f83565b600060208284031215611cba57600080fd5b5035919050565b60008060008060008060c08789031215611cda57600080fd5b863595506020870135945060408701359350611cf860608801611c25565b9250611d0660808801611be7565b915060a0870135611d1681611f83565b809150509295509295509295565b600080600080600060a08688031215611d3c57600080fd5b853594506020860135935060408601359250611d5a60608701611c25565b9150608086013578ffffffffffffffffffffffffffffffffffffffffffffffffff81168114611d8857600080fd5b809150509295509295909350565b60008060408385031215611da957600080fd5b82359150611c8260208401611c10565b600060208284031215611dcb57600080fd5b611c5182611c10565b600060208284031215611de657600080fd5b611c5182611c25565b6000825160005b81811015611e105760208186018101518583015201611df6565b81811115611e1f576000828501525b509190910192915050565b6020808252825182820181905260009190848201906040850190845b81811015611e7857835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101611e46565b50909695505050505050565b60008219821115611e9757611e97611ef6565b500190565b600082821015611eae57611eae611ef6565b500390565b600060ff821660ff841680821015611ecd57611ecd611ef6565b90039392505050565b600060ff821660ff811415611eed57611eed611ef6565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b8015158114611f9157600080fd5b5056fea164736f6c6343000806000a";

type MesonSwapTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonSwapTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonSwapTest__factory extends ContractFactory {
  constructor(...args: MesonSwapTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonSwapTest> {
    return super.deploy(token, overrides || {}) as Promise<MesonSwapTest>;
  }
  getDeployTransaction(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token, overrides || {});
  }
  attach(address: string): MesonSwapTest {
    return super.attach(address) as MesonSwapTest;
  }
  connect(signer: Signer): MesonSwapTest__factory {
    return super.connect(signer) as MesonSwapTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonSwapTestInterface {
    return new utils.Interface(_abi) as MesonSwapTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonSwapTest {
    return new Contract(address, _abi, signerOrProvider) as MesonSwapTest;
  }
}
