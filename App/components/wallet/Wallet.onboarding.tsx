import Dropzone from 'react-dropzone';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/Reducer';

import { arweave } from '../../config/Contract';

import { Modal, ModalOverlay, ModalContent, ModalBody, CircularProgress  } from '@chakra-ui/react';
import { WalletOnboardingContainer } from './Wallet.onboarding.styles';

export interface WalletOnboardingProps {
    dispatch: Dispatch;
    walletLoader: boolean;
    address: string;
}

export const WalletOnboardingComponent: FC<WalletOnboardingProps> = ({ dispatch, walletLoader, address }) => {
    return(
    <WalletOnboardingContainer>
        <Modal isOpen={walletLoader} onClose={() => {}} isCentered blockScrollOnMount={false}>
            <ModalOverlay/>
            <ModalContent borderRadius="8px">
                <ModalBody>
                        {
                        address ?
                            (
                                <>
                                    <p style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold', margin: '5px 0 5px 0' }}>Wallet Loaded Successfully</p>
                                    <p>{address}</p>
                                </>
                            )
                            :
                            <CircularProgress isIndeterminate color="blue.300" size="64px" margin="30px auto" display="flex" />
                        }
                </ModalBody>
            </ModalContent>
        </Modal>           
        <p>
            Before you can use Amplify, you'll need to load your Arweave wallet
        </p>
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
                <a className="load-wallet">
                    Load A Wallet By Dragging the JWK here   
                </a>
            </div>
        )}
        </Dropzone>
    </WalletOnboardingContainer>
    );
}   

export const WalletOnboarding = connect(
    (state: State) => ({
        walletLoader: state.walletLoader,
        address: state.address,
    })
)(WalletOnboardingComponent);