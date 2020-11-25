import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../redux/Reducer';
import { AppContainer, PageContainer } from '../theme/App.theme';
import { Header } from '../components/shared/Header';
import { AboutPage } from '../components/about/About.page';

export interface RewardsProps {
    dispatch: Dispatch;
}

export const RewardsComponent: FC<RewardsProps> = ({ dispatch }) => {
    return(
        <AppContainer>
            <Header page="about"/>
            <PageContainer>
                <AboutPage/>
            </PageContainer>
        </AppContainer>
    );
}   

export default connect(
    (state: State) => ({

    })
)(RewardsComponent);