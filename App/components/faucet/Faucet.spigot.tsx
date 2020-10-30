import Link from 'next/link';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/Reducer';

import { ButtonGroup, Button } from '@chakra-ui/core';
import { FaucetSpigotContainer } from './Faucet.spigot.styles';

export interface FaucetSpigotProps {
    dispatch: Dispatch;
}

export const FaucetSpigotComponent: FC<FaucetSpigotProps> = ({ dispatch }) => {
    return(
    <FaucetSpigotContainer>
        <p>Get some AMP tokens so you can start staking them</p>
        <p className="notice">Limited time offer. Please make sure your tokens are confirmed before staking them.</p>
        <Button variantColor="blue" size="lg" width="320px" height="90px" fontSize="24px" margin="45px auto" display="flex">
            Claim Tokens        
        </Button>
    </FaucetSpigotContainer>
    );
}   

export const FaucetSpigot = connect(
    (state: State) => ({

    })
)(FaucetSpigotComponent);