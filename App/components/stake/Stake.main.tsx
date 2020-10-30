import Link from 'next/link';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/Reducer';

import { InputGroup, InputRightElement, Input, Button } from '@chakra-ui/core';
import { StakeMainContainer } from './Stake.main.styles';

export interface StakeMainProps {
    dispatch: Dispatch;
}

export const StakeMainComponent: FC<StakeMainProps> = ({ dispatch }) => {
    return(
    <StakeMainContainer>
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
            
        <div className="line"/>
        
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
            
        <div className="line"/>
            
        <p>Withdraw Staked AMP tokens to your balance</p>
        <InputGroup size="lg" margin="30px 0">
            <Input
                type="number"        
                placeholder="# of AMP tokens to withdraw"
            />
            <InputRightElement width="240px">
                <Button size="lg" variantColor="blue" width="100%">
                    Withdraw
                </Button>
            </InputRightElement>
        </InputGroup>
    </StakeMainContainer>
    );
}   

export const StakeMain = connect(
    (state: State) => ({

    })
)(StakeMainComponent);