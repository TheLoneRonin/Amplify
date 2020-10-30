import { AnyAction, applyMiddleware, compose,createStore } from 'redux';
import thunk from 'redux-thunk';
import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';

import update from 'immutability-helper';

export interface State {
    lastAction: string;
    onboardingIndex: number;
};

export const InitialState: State = {
    lastAction: '',
    onboardingIndex: 0,
};

export function Reducer(State: State = InitialState, Action: AnyAction): State {
    console.log(State, Action);

    switch (Action.type) {
        case 'ONBOARDING_INDEX':
            State = update(
                State,
                { onboardingIndex: { $set: Action.index } },
            );
    }

    return update(State, { lastAction: { $set: Action.type } });
}

export type RootState = ReturnType<typeof Reducer>;

export const makeStore: MakeStore<State> = (context: Context) => createStore(Reducer, InitialState, compose(applyMiddleware(thunk)));

export const wrapper = createWrapper<State>(makeStore, { debug: false });
