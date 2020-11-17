import Link from 'next/link';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/Reducer';

import { InputGroup, InputRightElement, Input, Button, Alert, AlertIcon } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalBody, CircularProgress } from '@chakra-ui/react';
import { StakeMechanismContainer } from './Stake.mechanism.styles';

export interface StakeMechanismProps {
    dispatch: Dispatch;
    gatewayLoader: boolean;
    gatewayStatus: number;
    stakeLoader: boolean;
    stakeStatus: number;
}

export const StakeMechanismComponent: FC<StakeMechanismProps> = ({ dispatch, gatewayLoader, gatewayStatus, stakeLoader, stakeStatus }) => {
    function updateGateway() {
        dispatch({ type: 'TOGGLE_GATEWAY_LOADER', value: true });
        setTimeout(() => {
            dispatch({ type: 'TOGGLE_GATEWAY_LOADER', value: false });
            dispatch({ type: 'GATEWAY_STATUS', value: 1 });
        }, 2500);
    }

    function stakeTokens() {
        dispatch({ type: 'TOGGLE_STAKE_LOADER', value: true });
        setTimeout(() => {
            dispatch({ type: 'TOGGLE_STAKE_LOADER', value: false });
            dispatch({ type: 'STAKE_STATUS', value: 1 });
        }, 2500);
    }

    return(
    <StakeMechanismContainer>
        <Modal isOpen={gatewayLoader || stakeLoader} onClose={() => {}} isCentered blockScrollOnMount={false}>
            <ModalOverlay/>
            <ModalContent borderRadius="8px">
                <ModalBody display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <p style={{ margin: '30px 0 15px 0', fontSize: '18px', fontWeight: 'bold' }}>
                        {gatewayLoader ? 'Updating Gateway... Please wait...' : ''}
                        {stakeLoader ? 'Staking AMP Tokens... Please wait...' : ''}
                    </p>
                    <CircularProgress isIndeterminate color="blue.300" size="64px" margin="30px auto"/>
                </ModalBody>
            </ModalContent>
        </Modal>        

        <p>Configure your gateway URL. Make sure the IPv4 is available and live.</p>
        <InputGroup size="lg" margin="30px 0">
            <Input
                type="text"        
                placeholder="Enter your Gateway URL"
                disabled={gatewayStatus === 1}    
            />
            <InputRightElement width="240px" padding="0">
                <Button size="lg" colorScheme="blue" width="100%" onClick={e => updateGateway()}>
                    Update
                </Button>
            </InputRightElement>
        </InputGroup>
        
        {
        gatewayStatus !== 0 ?
        <Alert status={gatewayStatus === 1 ? 'success' : 'error'} borderRadius="8px">
            <AlertIcon />
            {gatewayStatus === 1 ? `Your Gateway URL was updated` : ``}
        </Alert>    
        : ''
        }   
        
        <p>Stake your AMP tokens. The more tokens staked. The more AMP you can earn.</p>
        <InputGroup size="lg" margin="30px 0">
            <Input
                type="number"        
                placeholder="# of AMP tokens to stake"
                min={0}    
                disabled={stakeStatus === 1}    
            />
            <InputRightElement width="240px" padding="0">
                <Button size="lg" colorScheme="blue" width="100%" onClick={e => stakeTokens()}>
                    Stake
                </Button>
            </InputRightElement>
        </InputGroup>

        {
        stakeStatus !== 0 ?
        <Alert status={stakeStatus === 1 ? 'success' : 'error'} borderRadius="8px">
            <AlertIcon />
            {stakeStatus === 1 ? `Successfully Staked 100 AMP Tokens` : ``}
        </Alert>    
        : ''
        }         
            
        <Button colorScheme="blue" size="lg" width="320px" height="90px" fontSize="24px" margin="45px auto 90px auto" display="flex" onClick={e => dispatch({ type: 'ONBOARDING_INDEX', value: 3 })}>
            Continue        
        </Button>
    </StakeMechanismContainer>
    );
}   

export const StakeMechanism = connect(
    (state: State) => ({
        gatewayLoader: state.gatewayLoader,
        gatewayStatus: state.gatewayStatus,
        stakeLoader: state.stakeLoader,
        stakeStatus: state.stakeStatus,
    })
)(StakeMechanismComponent);