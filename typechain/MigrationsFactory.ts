/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { Migrations } from "./Migrations";

export class MigrationsFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }
  deploy(): Promise<Migrations> {
    return super.deploy() as Promise<Migrations>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): Migrations {
    return super.attach(address) as Migrations;
  }
  connect(signer: Signer): MigrationsFactory {
    return super.connect(signer) as MigrationsFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Migrations {
    return new Contract(address, _abi, signerOrProvider) as Migrations;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "last_completed_migration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "completed",
        type: "uint256"
      }
    ],
    name: "setCompleted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "new_address",
        type: "address"
      }
    ],
    name: "upgrade",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102f0806100606000396000f3fe608060405234801561001057600080fd5b5060043610610069576000357c0100000000000000000000000000000000000000000000000000000000900480630900f0101461006e578063445df0ac146100b25780638da5cb5b146100d0578063fdacd5761461011a575b600080fd5b6100b06004803603602081101561008457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610148565b005b6100ba610230565b6040518082815260200191505060405180910390f35b6100d8610236565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101466004803603602081101561013057600080fd5b810190808035906020019092919050505061025b565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561022d5760008190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b15801561021357600080fd5b505af1158015610227573d6000803e3d6000fd5b50505050505b50565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102b857806001819055505b5056fea265627a7a723158204cc06496ef5930f591862c26e4289a04b2754eabae25c8588da9dbed28d8f6c864736f6c634300050b0032";
