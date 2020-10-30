import Link from 'next/link';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/Reducer';

import { InputGroup, InputRightElement, Input, Button } from '@chakra-ui/core';
import { StakeMechanismContainer } from './Stake.mechanism.styles';

export interface StakeMechanismProps {
    dispatch: Dispatch;
}

export const StakeMechanismComponent: FC<StakeMechanismProps> = ({ dispatch }) => {
    return(
    <StakeMechanismContainer>
        <p>Configure your gateway URL. Make sure the IPv4 is available and live.</p>
        <p className="notice">If you don't have an active Gateway. Check out our guide <a href="">here</a> to set one up.</p>    
        <InputGroup size="lg" margin="30px 0">
            <Input
                type="text"        
                placeholder="Enter your Gateway URL"
            />
            <InputRightElement width="240px">
                <Button size="lg" variantColor="blue" width="100%">
                    Update
                </Button>
            </InputRightElement>
        </InputGroup>
        
        <p>Stake your AMP tokens. The more tokens staked. The more AMP you can earn.</p>
        <InputGroup size="lg" margin="30px 0">
            <Input
                type="number"        
                placeholder="# of AMP tokens to stake"
            />
            <InputRightElement width="240px">
                <Button size="lg" variantColor="blue" width="100%">
                    Stake
                </Button>
            </InputRightElement>
        </InputGroup>
    </StakeMechanismContainer>
    );
}   

export const StakeMechanism = connect(
    (state: State) => ({

    })
)(StakeMechanismComponent);