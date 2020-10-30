import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../redux/Reducer';
import { AppContainer, PageContainer } from '../theme/App.theme';
import { Header } from '../components/shared/Header';

import { WalletInfo } from '../components/wallet/Wallet.info';

export interface WalletProps {
    dispatch: Dispatch;
}

export const WalletComponent: FC<WalletProps> = ({ dispatch }) => {
    return(
        <AppContainer>
            <Header page="wallet"/>
            <PageContainer>
                <WalletInfo/>
            </PageContainer>
        </AppContainer>
    );
}   

export default connect(
    (state: State) => ({

    })
)(WalletComponent);