import Link from 'next/link';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/Reducer';

import { InputGroup, InputRightElement, Input, Button, useToast } from '@chakra-ui/react';
import { StakeMainContainer } from './Stake.main.styles';

import { ConfigureGateway, StakeTokens, WithdrawStakedTokens } from '../../config/Contract';

export interface StakeMainProps {
    dispatch: Dispatch;

    jwk: string;

    wallet: {
        gatewayUrl: string;
        ampBalance: number;
        stakedAmpBalance: number;
    };

    gateway: {
        loading: boolean;
        input: string;
    };

    stake: {
        loading: boolean;
        input: string;
    };

    stakeWithdraw: {
        loading: boolean;
        input: string;
    };
}

export const StakeMainComponent: FC<StakeMainProps> = ({ dispatch, jwk, wallet, gateway, stake, stakeWithdraw }) => {
    const toast = useToast();

    return(
    <StakeMainContainer>
        <p>Configure your gateway URL. Make sure the IPv4 is available and live.</p>
        <p className="notice">Current Gateway URL: {wallet.gatewayUrl}</p>
            
        <InputGroup size="lg" margin="30px 0">
            <Input
                type="text"        
                placeholder="Enter your Gateway URL"
                value={gateway.input}
                onChange={e => dispatch({ type: 'GATEWAY_INPUT', value: e.target.value })}
            />
            <InputRightElement width="240px" padding="0">
                <Button size="lg" colorScheme="blue" width="100%"
                    isLoading={gateway.loading}
                    loadingText="Configuring..."      
                    onClick={async e => {
                        try {
                            if (gateway.input) {
                                dispatch({ type: 'GATEWAY_LOADING', value: true });
                                const payload = await ConfigureGateway(jwk, gateway.input);
                                dispatch({ type: 'GATEWAY_INPUT', value: '' });
                                dispatch({ type: 'GATEWAY_LOADING', value: false });
                                toast({
                                    title: "Gateway updated",
                                    description: `We've updated your Gateway URL. It might take a while for the transaction to confirm.`,
                                    status: "success",
                                    duration: 5000,
                                    isClosable: true,
                                });
                            } else {
                                toast({
                                    title: "Gateway update failed",
                                    description: "It looks like you didn't submit a valid address",
                                    status: "error",
                                    duration: 5000,
                                    isClosable: true,
                                });
                            }
                        } catch (error) {
                            toast({
                                title: "Gateway update failed",
                                description: "It looks like there was an error processing the transaction",
                                status: "error",
                                duration: 5000,
                                isClosable: true,
                            });
                        }
                    }}
                >
                    Update
                </Button>
            </InputRightElement>
        </InputGroup>
            
        <div className="line"/>
        
        <p>Stake your AMP tokens. The more tokens staked. The more AMP you can earn.</p>
        <p className="notice">Tokens available to stake: {wallet.ampBalance.toLocaleString()} AMP</p>

        <InputGroup size="lg" margin="30px 0">
            <Input
                type="number"        
                placeholder="# of AMP tokens to stake"
                min={0}    
                value={stake.input}
                onChange={e => dispatch({ type: 'STAKE_INPUT', value: e.target.value })}
            />
            <InputRightElement width="240px" padding="0">
                <Button size="lg" colorScheme="blue" width="100%"
                    isLoading={stake.loading}
                    loadingText="Staking..."
                    onClick={async e => {
                        try {
                            if (!isNaN(Number(stake.input)) && Number(stake.input) > 0) {
                                dispatch({ type: 'STAKE_LOADING', value: true });
                                const payload = await StakeTokens(jwk, Number(stake.input));
                                dispatch({ type: 'STAKE_INPUT', value: '' });
                                dispatch({ type: 'STAKE_LOADING', value: false });
                                toast({
                                    title: "Staked Tokens",
                                    description: `We've successfully staked your AMP tokens! It may take a while for your transaction to confirm.`,
                                    status: "success",
                                    duration: 5000,
                                    isClosable: true,
                                });
                            } else {
                                toast({
                                    title: "Stake failed",
                                    description: "It looks like you didn't submit a valid number",
                                    status: "error",
                                    duration: 5000,
                                    isClosable: true,
                                });
                            }
                        } catch (error) {
                            toast({
                                title: "Stake failed",
                                description: "It looks like there was an error processing the transaction",
                                status: "error",
                                duration: 5000,
                                isClosable: true,
                            });
                        }
                    }}
                >
                    Stake
                </Button>
            </InputRightElement>
        </InputGroup>
            
        <div className="line"/>
            
        <p>Withdraw Staked AMP tokens to your balance</p>
        <p className="notice">Currently staked tokens: {wallet.stakedAmpBalance.toLocaleString()} AMP</p>

        <InputGroup size="lg" margin="30px 0">
            <Input
                type="number"        
                placeholder="# of AMP tokens to withdraw"
                value={stakeWithdraw.input}
                onChange={e => dispatch({ type: 'STAKE_WITHDRAW_INPUT', value: e.target.value })}    
            />
            <InputRightElement width="240px" padding="0">
                <Button size="lg" colorScheme="blue" width="100%"
                    isLoading={stakeWithdraw.loading}
                    loadingText="Staking..."        
                    onClick={async e => {
                        try {
                            if (!isNaN(Number(stakeWithdraw.input)) && Number(stakeWithdraw.input) > 0) {
                                dispatch({ type: 'STAKE_WITHDRAW_LOADING', value: true });
                                const payload = await WithdrawStakedTokens(jwk, Number(stakeWithdraw.input));
                                dispatch({ type: 'STAKE_WITHDRAW_INPUT', value: '' });
                                dispatch({ type: 'STAKE_WITHDRAW_LOADING', value: false });
                                toast({
                                    title: "Withdrawn Staked Tokens",
                                    description: `We've successfully withdrew your AMP tokens! It may take a while for your transaction to confirm.`,
                                    status: "success",
                                    duration: 5000,
                                    isClosable: true,
                                });
                            } else {
                                toast({
                                    title: "Withdraw failed",
                                    description: "It looks like you didn't submit a valid number",
                                    status: "error",
                                    duration: 5000,
                                    isClosable: true,
                                });
                            }
                        } catch (error) {
                            toast({
                                title: "Withdraw failed",
                                description: "It looks like there was an error processing the transaction",
                                status: "error",
                                duration: 5000,
                                isClosable: true,
                            });
                        }
                    }}
                >
                    Withdraw
                </Button>
            </InputRightElement>
        </InputGroup>
    </StakeMainContainer>
    );
}   

export const StakeMain = connect(
    (state: State) => ({
        jwk: state.jwk,
        wallet: {
            gatewayUrl: state.wallet.gatewayUrl,
            ampBalance: state.wallet.ampBalance,
            stakedAmpBalance: state.wallet.stakedAmpBalance,
        },

        gateway: {
            loading: state.gateway.loading,
            input: state.gateway.input,
        },

        stake: {
            loading: state.stake.loading,
            input: state.stake.input,
        },

        stakeWithdraw: {
            loading: state.stakeWithdraw.loading,
            input: state.stakeWithdraw.input,
        },
    })
)(StakeMainComponent);