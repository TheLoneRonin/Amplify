import { AnyAction } from 'redux';
import update from 'immutability-helper';

import { InitialState, State } from './Reducer';

export function ReducerActions(State: State, Action: AnyAction): State {
  switch (Action.type) {
    case 'UPDATE_JWK':
      return State = update(
          State,
          { jwk: { $set: Action.jwk } },
      );
    case 'UPDATE_SLIDE_INDEX':
      return State = update(
        State,
        { slideIndex: { $set: Action.value } },
      );
    case 'UPDATE_ADDRESS':
      return State = update(
          State,
          { address: { $set: Action.address } },
      );
    case 'TOGGLE_DISCLAIMER':
      return State = update(
          State,
          { disclaimer: { $set: Action.value } },
      );
    case 'TOGGLE_WALLET_LOADER':
      return State = update(
          State,
          { walletLoader: { $set: Action.value } },
      );
    case 'TOGGLE_FAUCET_LOADER':
      return State = update(
          State,
          { faucetLoader: { $set: Action.value } },
      );
    case 'TOGGLE_GATEWAY_LOADER':
      return State = update(
          State,
          { gatewayLoader: { $set: Action.value } },
      );
    case 'GATEWAY_STATUS':
      return State = update(
          State,
          { gatewayStatus: { $set: Action.value } },
      );
    case 'TOGGLE_STAKE_LOADER':
      return State = update(
          State,
          { stakeLoader: { $set: Action.value } },
      );
    case 'STAKE_STATUS':
      return State = update(
          State,
          { stakeStatus: { $set: Action.value } },
      );
    case 'ONBOARDING_INDEX':
      return State = update(
          State,
          { onboardingIndex: { $set: Action.value } },
      );
    case 'UPDATE_WALLET_LOADING':
      return State = update(
        State,
        { wallet: { loading: { $set: Action.value } } },
      )
    case 'UPDATE_WALLET':
      return State = update(
        State,
        {
          wallet: {
            arBalance: { $set: Action.arBalance },
            ampBalance: { $set: Action.ampBalance },
            stakedAmpBalance: { $set: Action.stakedAmpBalance },
            gatewayUrl: { $set: Action.gatewayUrl },
          }
        },
      );
    case 'WITHDRAW_LOADING':
      return State = update(
        State,
        { withdraw: { loading: { $set: Action.value } } }
      );
    case 'WITHDRAW_INPUT':
      return State = update(
        State,
        { withdraw: { input: { $set: Action.value } } }
      );
    case 'WITHDRAW_AMOUNT':
      return State = update(
        State,
        { withdraw: { amount: { $set: Action.value } } }
      );
    case 'GATEWAY_LOADING':
      return State = update(
        State,
        { gateway: { loading: { $set: Action.value } } },
      );
    case 'GATEWAY_INPUT':
      return State = update(
        State,
        { gateway: { input: { $set: Action.value } } },
      );
    case 'STAKE_LOADING':
      return State = update(
        State,
        { stake: { loading: { $set: Action.value } } },
      );
    case 'STAKE_INPUT':
      return State = update(
        State,
        { stake: { input: { $set: Action.value } } },
      );
    case 'STAKE_WITHDRAW_LOADING':
      return State = update(
        State,
        { stakeWithdraw: { loading: { $set: Action.value } } },
      );
    case 'STAKE_WITHDRAW_INPUT':
      return State = update(
        State,
        { stakeWithdraw: { input: { $set: Action.value } } },
      );
    default:
      return State;
  }
}