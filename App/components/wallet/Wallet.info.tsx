import Link from 'next/link';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/Reducer';

import { InputGroup, InputRightElement, Input, Button } from '@chakra-ui/core';
import { WalletInfoContainer } from './Wallet.info.styles';

export interface WalletInfoProps {
    dispatch: Dispatch;
}

export const WalletInfoComponent: FC<WalletInfoProps> = ({ dispatch }) => {
    return(
    <WalletInfoContainer>
        <div className="item">
            <p>Your Arweave address is</p>
            <p>dow7mxks0QGGV7zOmHEE1OOi5LyfHpcrDH9n0UPw9eY</p>    
        </div>
        <div className="item">
            <p>Your Arweave (AR) balance is</p>
            <p>100,000.00 AR</p>    
        </div>
        <div className="item">
            <p>Your Amplify (AMP) balance is</p>
            <p>100,000,000.00 AMP</p>    
        </div>
        <div className="item">
            <p>The Amplify (AMP) tokens that you have staked is</p>
            <p>100.00 AMP</p>    
        </div>    
        <div className="item">
            <p>Your Amplify Gateway is</p>
            <p>127.0.0.1</p>    
        </div>

        <div className="line"></div>    
            
        <p className="large">Withdraw AMP Tokens</p>
        <p className="label">Arweave Address</p>
        <InputGroup size="lg" margin="15px">
            <Input
                type="text"        
                placeholder="Arweave Address"
            />
        </InputGroup>
            
        <p className="label"># of AMP Tokens</p>    
        <InputGroup size="lg" margin="15px">
            <Input
                type="text"        
                placeholder="# of AMP tokens"
            />
            <InputRightElement width="240px">
                <Button size="lg" variantColor="blue" width="100%">
                    Withdraw
                </Button>
            </InputRightElement>
        </InputGroup> 
    </WalletInfoContainer>
    );
}   

export const WalletInfo = connect(
    (state: State) => ({

    })
)(WalletInfoComponent);