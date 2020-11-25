import Link from 'next/link';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/Reducer';
import { ClaimTokens } from '../../config/Contract';

import { Modal, ModalOverlay, ModalContent, ModalBody, CircularProgress, Button, useToast } from '@chakra-ui/react';
import { FaucetSpigotContainer } from './Faucet.spigot.styles';

export interface FaucetSpigotProps {
    dispatch: Dispatch;
    faucetLoader: boolean;
    address: string;
}

export const FaucetSpigotComponent: FC<FaucetSpigotProps> = ({ dispatch, faucetLoader, address }) => {
    const toast = useToast();

    async function claimTokens() {
        dispatch({ type: 'TOGGLE_FAUCET_LOADER', value: true });

        try {
            if (!address) {
                throw Error('Invalid address');
            }

            await ClaimTokens(address);

            toast({
                title: "Claimed tokens!",
                description: `We've deposited 100 AMP tokens into your account.`,
                status: "success",
                duration: 5000,
                isClosable: true,
            });

            dispatch({ type: 'ONBOARDING_INDEX', value: 2 });
        } catch (error) {
            toast({
                title: "Claim token error",
                description: error.response.body ? error.result.body.result : `Error claiming tokens`,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }

        dispatch({ type: 'TOGGLE_FAUCET_LOADER', value: false });
    }

    return(
    <FaucetSpigotContainer>
        <Modal isOpen={faucetLoader} onClose={() => {}} isCentered blockScrollOnMount={false}>
            <ModalOverlay/>
            <ModalContent borderRadius="8px">
                <ModalBody display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <p style={{ margin: '30px 0 15px 0', fontSize: '18px', fontWeight: 'bold' }}>Claiming Tokens... Please Wait...</p>
                    <CircularProgress isIndeterminate color="blue.300" size="64px" margin="30px auto"/>
                </ModalBody>
            </ModalContent>
        </Modal>           

        <p>Claim 100 AMP tokens so you can start staking them</p>
        <p className="notice">Limited time offer. Please make sure your tokens are confirmed before staking them.</p>
        <Button colorScheme="blue" size="lg" width="320px" height="90px" fontSize="24px" margin="45px auto" display="flex" onClick={e => claimTokens()}>
            Claim Tokens        
        </Button>
    </FaucetSpigotContainer>
    );
}   

export const FaucetSpigot = connect(
    (state: State) => ({
        faucetLoader: state.faucetLoader,
        address: state.address,
    })
)(FaucetSpigotComponent);