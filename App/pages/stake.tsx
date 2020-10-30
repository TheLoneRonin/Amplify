import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../redux/Reducer';
import { AppContainer, PageContainer } from '../theme/App.theme';
import { Header } from '../components/shared/Header';

import { StakeMain } from '../components/stake/Stake.main';

export interface StakeProps {
    dispatch: Dispatch;
}

export const StakeComponent: FC<StakeProps> = ({ dispatch }) => {
    return(
        <AppContainer>
            <Header page="stake"/>
            <PageContainer>
                <StakeMain/>
            </PageContainer>
        </AppContainer>
    );
}   

export default connect(
    (state: State) => ({

    })
)(StakeComponent);