import Link from 'next/link';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/Reducer';

import { ButtonGroup, Button } from '@chakra-ui/react';
import { RewardScheduleContainer } from './Reward.schedule.styles';

export interface RewardScheduleProps {
    dispatch: Dispatch;
}

export const RewardScheduleComponent: FC<RewardScheduleProps> = ({ dispatch }) => {
    return(
    <RewardScheduleContainer>
        <p>
            Rewards are issued based on the number of Gateways available on the Amplify network. The more Gateways, the more
            AMP tokens are staked per reward schedule.     
        </p>
        <p>
            The first 3 months, the founders reward period all AMP Gateways receive 10x more rewards than the normal schedule.
            With a minimum threshold of 100 AMP tokens per gateway.     
        </p>
        <p>
            The first reward period issues 10 AMP tokens for every Gateway available. If there are 100 Gateways live and running. That
            would mean 1000 AMP tokens are issued. The first reward schedule runs for 9 months. 
        </p>
        <p>
            Every reward period thereafter is for 1 year and the reward is halved. Therefore, the second reward period issues 5 AMP tokens
            per Gateway available. The third reward period 2.5 AMP, the fourth 1.25 and so fourth.     
        </p>
        <p>
            Furthermore, verifying and validating Gateways on the Amplify network can help you earn tokens too. If you identify and find
            a malicious and fake node. You can earn all the tokens they staked for the malicious and fake node.
        </p>
    </RewardScheduleContainer>
    );
}   

export const RewardSchedule = connect(
    (state: State) => ({

    })
)(RewardScheduleComponent);