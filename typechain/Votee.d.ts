/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface VoteeInterface extends Interface {
  functions: {
    scheduleElections: TypedFunctionDescription<{
      encode([_startsAtTimestamp, _endsWithinSeconds]: [
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    registerIdentifier: TypedFunctionDescription<{
      encode([_electionID, _identifierHash]: [BigNumberish, Arrayish]): string;
    }>;

    registerOption: TypedFunctionDescription<{
      encode([_electionID, _option]: [BigNumberish, string]): string;
    }>;

    vote: TypedFunctionDescription<{
      encode([_electionID, _optionID, _identifier]: [
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;
  };

  events: {
    ElectionScheduled: TypedEventDescription<{
      encodeTopics([electionID, startTimestamp, duration]: [
        null,
        null,
        null
      ]): string[];
    }>;

    RegisteredIdentifier: TypedEventDescription<{
      encodeTopics([electionID, anonymizedIdentifier]: [null, null]): string[];
    }>;

    RegisteredOption: TypedEventDescription<{
      encodeTopics([electionID, option, optionID]: [
        null,
        null,
        null
      ]): string[];
    }>;

    Voted: TypedEventDescription<{
      encodeTopics([electionID, anonymizedIdentifier]: [
        null,
        Arrayish | null
      ]): string[];
    }>;
  };
}

export class Votee extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Votee;
  attach(addressOrName: string): Votee;
  deployed(): Promise<Votee>;

  on(event: EventFilter | string, listener: Listener): Votee;
  once(event: EventFilter | string, listener: Listener): Votee;
  addListener(eventName: EventFilter | string, listener: Listener): Votee;
  removeAllListeners(eventName: EventFilter | string): Votee;
  removeListener(eventName: any, listener: Listener): Votee;

  interface: VoteeInterface;

  functions: {
    getElectionStartTime(_electionID: BigNumberish): Promise<BigNumber>;

    getElectionDuration(_electionID: BigNumberish): Promise<BigNumber>;

    isIdentifierAllowed(
      _electionID: BigNumberish,
      _anonymizedIdentifier: Arrayish
    ): Promise<boolean>;

    didVote(_electionID: BigNumberish, _voter: string): Promise<boolean>;

    getElectionOptionsCount(_electionID: BigNumberish): Promise<BigNumber>;

    getElectionOptionAddress(
      _electionID: BigNumberish,
      _optionID: BigNumberish
    ): Promise<string>;

    getElectionOptionVotes(
      _electionID: BigNumberish,
      _option: string
    ): Promise<BigNumber>;

    scheduleElections(
      _startsAtTimestamp: BigNumberish,
      _endsWithinSeconds: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    registerIdentifier(
      _electionID: BigNumberish,
      _identifierHash: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    registerOption(
      _electionID: BigNumberish,
      _option: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    vote(
      _electionID: BigNumberish,
      _optionID: BigNumberish,
      _identifier: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getElectionsCount(): Promise<BigNumber>;
  };

  filters: {
    ElectionScheduled(
      electionID: null,
      startTimestamp: null,
      duration: null
    ): EventFilter;

    RegisteredIdentifier(
      electionID: null,
      anonymizedIdentifier: null
    ): EventFilter;

    RegisteredOption(
      electionID: null,
      option: null,
      optionID: null
    ): EventFilter;

    Voted(electionID: null, anonymizedIdentifier: Arrayish | null): EventFilter;
  };

  estimate: {
    scheduleElections(
      _startsAtTimestamp: BigNumberish,
      _endsWithinSeconds: BigNumberish
    ): Promise<BigNumber>;

    registerIdentifier(
      _electionID: BigNumberish,
      _identifierHash: Arrayish
    ): Promise<BigNumber>;

    registerOption(
      _electionID: BigNumberish,
      _option: string
    ): Promise<BigNumber>;

    vote(
      _electionID: BigNumberish,
      _optionID: BigNumberish,
      _identifier: Arrayish
    ): Promise<BigNumber>;
  };
}
