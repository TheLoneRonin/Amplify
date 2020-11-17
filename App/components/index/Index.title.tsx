import Link from 'next/link';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/Reducer';

import { Button, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody } from '@chakra-ui/react';
import { IndexTitleContainer } from './Index.title.styles';

import { WalletOnboarding } from '../wallet/Wallet.onboarding';
import { FaucetSpigot } from '../faucet/Faucet.spigot';
import { StakeMechanism } from '../stake/Stake.mechanism';
import { RewardSchedule } from '../rewards/Reward.schedule';

export interface IndexTitleProps {
    dispatch: Dispatch;
    disclaimer: boolean;
    onboardingIndex: number;
}

export const IndexTitleComponent: FC<IndexTitleProps> = ({ dispatch, disclaimer, onboardingIndex }) => {
    return(
    <IndexTitleContainer>
        <Modal isOpen={disclaimer} onClose={() => {}} isCentered blockScrollOnMount={false}>
            <ModalOverlay/>
            <ModalContent borderRadius="8px">
                <ModalHeader>Before you continue</ModalHeader>
                <ModalBody>
                    <p>
                        Amplify is designed
                        specifically to work with an Arweave Gateway. If you don't have one setup
                        and you'd like to learn how to set one up. Check out our
                        guide <a style={{ color: '#2a69ac', textDecoration: 'underline', fontWeight: 'bold', cursor: 'pointer' }}>here</a> to 
                        learn how.    
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" onClick={e => dispatch({ type: 'TOGGLE_DISCLAIMER', value: false })}>
                        Continue
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>        

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
            colorScheme="blue"
            index={onboardingIndex}    
            onChange={value => dispatch({ type: 'ONBOARDING_INDEX', value })}    
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
                        <Button colorScheme="blue" size="lg" width="320px" height="90px" fontSize="24px" margin="45px auto 90px auto" display="flex">
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
        disclaimer: state.disclaimer,
        onboardingIndex: state.onboardingIndex,
    })
)(IndexTitleComponent);