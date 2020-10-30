import Link from 'next/link';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/Reducer';

import { WalletOnboardingContainer } from './Wallet.onboarding.styles';

export interface WalletOnboardingProps {
    dispatch: Dispatch;
}

export const WalletOnboardingComponent: FC<WalletOnboardingProps> = ({ dispatch }) => {
    return(
    <WalletOnboardingContainer>
        <p>
            Before you can use Amplify, you'll need to load your Arweave wallet
        </p>        
        <a className="load-wallet">
            Load A Wallet By Dragging the JWK here   
        </a>
    </WalletOnboardingContainer>
    );
}   

export const WalletOnboarding = connect(
    (state: State) => ({

    })
)(WalletOnboardingComponent);