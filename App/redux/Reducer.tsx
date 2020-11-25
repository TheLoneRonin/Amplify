import { AnyAction, applyMiddleware, compose,createStore } from 'redux';
import thunk from 'redux-thunk';
import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';

import update from 'immutability-helper';

import { ReducerActions } from './Reducer.actions';

export interface State {
    lastAction: string;
    disclaimer: boolean;
    onboardingIndex: number;
    walletLoader: boolean;
    jwk: any;
    address: string;
    faucetLoader: boolean;
    gatewayLoader: boolean;
    gatewayStatus: number;
    stakeLoader: boolean;
    stakeStatus: number;
    slideIndex: number;

    wallet: {
        loading: boolean;
        arBalance: number;
        ampBalance: number;
        stakedAmpBalance: number;
        gatewayUrl: string;
    };

    withdraw: {
        loading: boolean;
        input: string;
        amount: number;
    };

    gateway: {
        loading: boolean;
        input: string;
    };

    stake: {
        loading: boolean;
        input: string;
    };

    stakeWithdraw: {
        loading: boolean;
        input: string;
    };
};

export const InitialState: State = {
    lastAction: '',
    disclaimer: true,
    onboardingIndex: 0,
    walletLoader: false,
    jwk: null,
    address: '',
    faucetLoader: false,
    gatewayLoader: false,
    gatewayStatus: 0,
    stakeLoader: false,
    stakeStatus: 0,
    slideIndex: 0,

    wallet: {
        loading: false,
        arBalance: 0,
        ampBalance: 0,
        stakedAmpBalance: 0,
        gatewayUrl: '',
    },

    withdraw: {
        loading: false,
        input: '',
        amount: 0,
    },

    gateway: {
        loading: false,
        input: '',
    },

    stake: {
        loading: false,
        input: '',
    },

    stakeWithdraw: {
        loading: false,
        input: '',
    },
};

export function Reducer(State: State = InitialState, Action: AnyAction): State {
    console.log(State, Action);

    State = ReducerActions(State, Action);
    return update(State, { lastAction: { $set: Action.type } });
}

export type RootState = ReturnType<typeof Reducer>;

export const makeStore: MakeStore<State> = (context: Context) => createStore(Reducer, InitialState, compose(applyMiddleware(thunk)));

export const wrapper = createWrapper<State>(makeStore, { debug: false });
