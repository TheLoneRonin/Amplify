import Link from 'next/link';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/Reducer';

import { Button, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/core';
import { IndexTitleContainer } from './Index.title.styles';

import { WalletOnboarding } from '../wallet/Wallet.onboarding';
import { FaucetSpigot } from '../faucet/Faucet.spigot';
import { StakeMechanism } from '../stake/Stake.mechanism';
import { RewardSchedule } from '../rewards/Reward.schedule';

export interface IndexTitleProps {
    dispatch: Dispatch;
    onboardingIndex: number;
}

export const IndexTitleComponent: FC<IndexTitleProps> = ({ dispatch, onboardingIndex }) => {
    return(
    <IndexTitleContainer>
        <div className="title">
            <img src="/images/amplify.png" />
            <h1>Amplify</h1>    
        </div>
        <h2>The Distributed Economy For Arweave Gateways</h2>
        
        <div className="progression">
            <div className="progress-dot"></div>
            <div className="progress-dot"></div>
            <div className="progress-dot"></div>
            <div className="progress-dot"></div>
            <div className="progress-dot"></div>
                
            <div className={`progress-line length-${onboardingIndex}`}></div>        
        </div>
        <Tabs
            isFitted
            variantColor="blue"
            onChange={index => {
                dispatch({ type: 'ONBOARDING_INDEX', index });
            }}    
        >
            <TabList>
                <Tab>Configure Wallet</Tab>
                <Tab disabled={false}>Claim Tokens</Tab>
                <Tab disabled={false}>Stake Tokens</Tab>
                <Tab disabled={false}>Review Rewards</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <WalletOnboarding/>
                </TabPanel>
                <TabPanel>
                    <FaucetSpigot/>
                </TabPanel>
                <TabPanel>
                    <StakeMechanism/>
                </TabPanel>
                <TabPanel>
                    <RewardSchedule />
                    <Link href="/wallet">
                        <Button variantColor="blue" size="lg" width="320px" height="90px" fontSize="24px" margin="45px auto 90px auto" display="flex">
                            Finish        
                        </Button>
                    </Link>    
                </TabPanel>
            </TabPanels>    
        </Tabs>
    </IndexTitleContainer>
    );
}   

export const IndexTitle = connect(
    (state: State) => ({
        onboardingIndex: state.onboardingIndex,
    })
)(IndexTitleComponent);