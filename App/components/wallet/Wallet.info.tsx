import Dropzone from 'react-dropzone';
import Link from 'next/link';
import { FC, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/Reducer';
import { arweave, GetBalance, WithdrawTokens } from '../../config/Contract';

import { InputGroup, InputRightElement, Input, Stack, Button, CircularProgress, useToast } from '@chakra-ui/react';
import { WalletInfoContainer } from './Wallet.info.styles';

export interface WalletInfoProps {
    dispatch: Dispatch;
    address: string;
    jwk: any;
    loading: boolean;
    arBalance: number;
    ampBalance: number;
    stakedAmpBalance: number;
    gatewayUrl: string;

    withdrawLoading: boolean;
    withdrawAddress: string;
    withdrawAmount: number;
}

export const WalletInfoComponent: FC<WalletInfoProps> = ({ dispatch, address, jwk, loading, arBalance, ampBalance, stakedAmpBalance, gatewayUrl, withdrawLoading, withdrawAddress, withdrawAmount }) => {
    const toast = useToast();

    useLayoutEffect(() => {
        (async () => {
            if (jwk) {
                dispatch({ type: 'UPDATE_WALLET_LOADING', value: true });
                const { balance, stake, gateway, arBalance } = await GetBalance(address, jwk);
                dispatch({
                    type: 'UPDATE_WALLET',
                    arBalance,
                    ampBalance: balance,
                    stakedAmpBalance: stake,
                    gatewayUrl: gateway,
                });
                dispatch({ type: 'UPDATE_WALLET_LOADING', value: false });
            }
        })();
    }, [address, jwk]);

    return(
    <WalletInfoContainer>
        <div className="loader-wrap">
            <div className={`loader ${loading ? 'active' : ''}`}>
                <CircularProgress isIndeterminate color="blue.300" size="64px" margin="30px auto"/>        
            </div>        
            
            <div className="item">
                <p>Your Arweave address is</p>
                <p>{address}</p>    
            </div>
            <div className="item">
                <p>Your Arweave (AR) balance is</p>
                <p>{arBalance.toLocaleString()} AR</p>    
            </div>
            <div className="item">
                <p>Your Amplify (AMP) balance is</p>
                <p>{ampBalance.toLocaleString()} AMP</p>    
            </div>
            <div className="item">
                <p>The Amplify (AMP) tokens that you have staked is</p>
                <p>{stakedAmpBalance.toLocaleString()} AMP</p>    
            </div>    
            <div className="item">
                <p>Your Amplify Gateway is</p>
                <p>{gatewayUrl}</p>    
            </div>
        </div>        

        <div className="line"></div>    
            
        <p className="large">Withdraw AMP Tokens</p>
        <p className="label">Arweave Address</p>
        <InputGroup size="lg" margin="15px">
            <Input
                type="text"        
                placeholder="Arweave Address"
                value={withdrawAddress}
                onChange={e => dispatch({ type: 'WITHDRAW_INPUT', value: e.target.value })}    
            />
        </InputGroup>
            
        <p className="label"># of AMP Tokens</p>    
        <InputGroup size="lg" margin="15px">
            <Input
                type="text"        
                placeholder="# of AMP tokens"
                min={0}
                value={withdrawAmount}
                onChange={e => dispatch({ type: 'WITHDRAW_AMOUNT', value: e.target.value })}    
            />
            <InputRightElement width="240px" padding="0">
                    <Button
                        size="lg"
                        colorScheme="blue"
                        width="100%"
                        isLoading={withdrawLoading}
                        loadingText="Withdrawing..."
                        onClick={async e => {
                            try {
                                if (withdrawAddress && withdrawAmount && arBalance > 0) {
                                    dispatch({ type: 'WITHDRAW_LOADING', value: true });
                                    const payload = await WithdrawTokens(jwk, withdrawAddress, withdrawAmount);
                                    dispatch({ type: 'WITHDRAW_INPUT', value: '' });
                                    dispatch({ type: 'WITHDRAW_AMOUNT', value: 0 });
                                    dispatch({ type: 'WITHDRAW_LOADING', value: false });
                                    toast({
                                        title: "Withdraw success",
                                        description: `We've withdrawn the AMP tokens from your account. It might take a while for your balance to update.`,
                                        status: "success",
                                        duration: 5000,
                                        isClosable: true,
                                    });
                                } else {
                                    toast({
                                        title: "Withdraw failed",
                                        description: "It looks like you didn't input an address or amount",
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
        
        <Stack direction="row" justifyContent="flex-end" padding="30px 15px">
            <Link href="/">
                <Button colorScheme="yellow" size="lg" onClick={e => dispatch({ type: 'ONBOARDING_INDEX', value: 0 })}>
                    Restart Onboarding 
                </Button>        
            </Link>
            <Dropzone onDrop={files => { 
                dispatch({ type: 'TOGGLE_WALLET_LOADER', value: true });        
                const fileReader = new FileReader();
                fileReader.onload = event => {
                    (async () => {
                        const jwk = JSON.parse(event.target.result.toString());
                        const address = await arweave.wallets.jwkToAddress(jwk);
                        dispatch({ type: 'UPDATE_JWK', jwk });
                        dispatch({ type: 'UPDATE_ADDRESS', address });

                        localStorage.setItem('jwk', JSON.stringify(jwk));
                        localStorage.setItem('address', address);

                        setTimeout(() => {
                            dispatch({ type: 'TOGGLE_WALLET_LOADER', value: false });
                            dispatch({ type: 'ONBOARDING_INDEX', value: 1 });       
                        }, 2000);
                    })();
                }
                fileReader.readAsText(files[0]);
            }}>
            {({getRootProps, getInputProps}) => (
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <Button colorScheme="blue" size="lg">
                        Load Different Wallet  
                    </Button>
                </div>
            )}
            </Dropzone>
        </Stack>
    </WalletInfoContainer>
    );
}   

export const WalletInfo = connect(
    (state: State) => ({
        address: state.address,
        jwk: state.jwk,
        loading: state.wallet.loading,
        arBalance: state.wallet.arBalance,
        ampBalance: state.wallet.ampBalance,
        stakedAmpBalance: state.wallet.stakedAmpBalance,
        gatewayUrl: state.wallet.gatewayUrl,

        withdrawLoading: state.withdraw.loading,
        withdrawAddress: state.withdraw.input,
        withdrawAmount: state.withdraw.amount,
    })
)(WalletInfoComponent);