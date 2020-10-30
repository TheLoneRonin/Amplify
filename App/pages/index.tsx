import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../redux/Reducer';
import { AppContainer, PageContainer } from '../theme/App.theme';
import { Header } from '../components/shared/Header';

import { IndexTitle } from '../components/index/Index.title';

export interface IndexProps {
    dispatch: Dispatch;
}

export const IndexComponent: FC<IndexProps> = ({ dispatch }) => {
    return(
        <AppContainer>
            <PageContainer>
                <IndexTitle/>
            </PageContainer>
        </AppContainer>
    );
}   

export default connect(
    (state: State) => ({

    })
)(IndexComponent);