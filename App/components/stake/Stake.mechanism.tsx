import Link from 'next/link';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/Reducer';

import { InputGroup, InputRightElement, Input, Button, Alert, AlertIcon } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalBody, CircularProgress, useToast } from '@chakra-ui/react';
import { StakeMechanismContainer } from './Stake.mechanism.styles';

import { ConfigureGateway, StakeTokens } from '../../config/Contract';

export interface StakeMechanismProps {
    dispatch: Dispatch;
    gatewayLoader: boolean;
    gatewayStatus: number;
    stakeLoader: boolean;
    stakeStatus: number;

    jwk: any;

    gateway: {
        loading: boolean;
        input: string;
    };

    stake: {
        loading: boolean;
        input: string;
    };
}

export const StakeMechanismComponent: FC<StakeMechanismProps> = ({ dispatch, gatewayLoader, gatewayStatus, stakeLoader, stakeStatus, jwk, gateway, stake }) => {
    const toast = useToast();

    async function updateGateway() {
        dispatch({ type: 'TOGGLE_GATEWAY_LOADER', value: true });

        try {
            if (gateway.input) {
                dispatch({ type: 'GATEWAY_LOADING', value: true });

                const payload = await ConfigureGateway(jwk, gateway.input);

                dispatch({ type: 'GATEWAY_LOADING', value: false });

                toast({
                    title: "Gateway updated",
                    description: `We've updated your Gateway URL. It might take a while for the transaction to confirm.`,
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });

                dispatch({ type: 'GATEWAY_STATUS', value: 1 });
            } else {
                toast({
                    title: "Gateway update failed",
                    description: "It looks like you didn't submit a valid address",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });

                dispatch({ type: 'GATEWAY_STATUS', value: -1 });
            }
        } catch (error) {
            toast({
                title: "Gateway update failed",
                description: "It looks like there was an error processing the transaction",
                status: "error",
                duration: 5000,
                isClosable: true,
            });

            dispatch({ type: 'GATEWAY_STATUS', value: -1 });
        }

        dispatch({ type: 'TOGGLE_GATEWAY_LOADER', value: false });
    }

    async function stakeTokens() {
        dispatch({ type: 'TOGGLE_STAKE_LOADER', value: true });

        try {
            if (!isNaN(Number(stake.input)) && Number(stake.input) > 0) {
                dispatch({ type: 'STAKE_LOADING', value: true });
                const payload = await StakeTokens(jwk, Number(stake.input));
                dispatch({ type: 'STAKE_LOADING', value: false });
                toast({
                    title: "Staked Tokens",
                    description: `We've successfully staked your AMP tokens! It may take a while for your transaction to confirm.`,
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });

                dispatch({ type: 'STAKE_STATUS', value: 1 });
            } else {
                toast({
                    title: "Stake failed",
                    description: "It looks like you didn't submit a valid number",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });

                dispatch({ type: 'STAKE_STATUS', value: -1 });
            }
        } catch (error) {
            toast({
                title: "Stake failed",
                description: "It looks like there was an error processing the transaction",
                status: "error",
                duration: 5000,
                isClosable: true,
            });

            dispatch({ type: 'STAKE_STATUS', value: -1 });
        }

        dispatch({ type: 'TOGGLE_STAKE_LOADER', value: false });
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
                value={gateway.input}
                onChange={e => dispatch({ type: 'GATEWAY_INPUT', value: e.target.value })}
            />
            <InputRightElement width="240px" padding="0">
                <Button size="lg" colorScheme="blue" width="100%"
                    onClick={e => updateGateway()}
                    isLoading={gateway.loading}
                    loadingText="Configuring..."  
                >
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
                value={stake.input}
                onChange={e => dispatch({ type: 'STAKE_INPUT', value: e.target.value })}
            />
            <InputRightElement width="240px" padding="0">
                <Button size="lg" colorScheme="blue" width="100%"
                    onClick={e => stakeTokens()}
                    isLoading={stake.loading}
                    loadingText="Staking..."
                >
                    Stake
                </Button>
            </InputRightElement>
        </InputGroup>

        {
        stakeStatus !== 0 ?
        <Alert status={stakeStatus === 1 ? 'success' : 'error'} borderRadius="8px">
            <AlertIcon />
            {stakeStatus === 1 ? `Successfully Staked AMP Tokens` : ``}
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

        jwk: state.jwk,

        gateway: {
            loading: state.gateway.loading,
            input: state.gateway.input,
        },

        stake: {
            loading: state.stake.loading,
            input: state.stake.input,
        },
    })
)(StakeMechanismComponent);