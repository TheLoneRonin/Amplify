import Link from 'next/link';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/Reducer';

import { ButtonGroup, Button } from '@chakra-ui/react';
import { HeaderContainer } from './Header.styles';

export interface HeaderProps {
  dispatch: Dispatch;
  page: string;
}

export const HeaderComponent: FC<HeaderProps> = ({ dispatch, page }) => {
    return(
      <HeaderContainer>
        <div className="wrap">
          <Link href="/wallet">
            <a className="brand">
              <img src="/images/amplify.png"/>
              <h1>Amplify</h1>
            </a>
          </Link>

          <div className="links">
            <Link href="/wallet">
              <a className={`link ${page === 'wallet' ? 'active' : ''}`}>
                Wallet
              </a>
            </Link>
            <Link href="/stake">
              <a className={`link ${page === 'stake' ? 'active' : ''}`}>
                Stake
              </a>
            </Link>
            <Link href="/about">
              <a className={`link ${page === 'about' ? 'active' : ''}`}>
                About
              </a>
            </Link>
          </div>
        </div>
      </HeaderContainer>
    );
}   

export const Header = connect(
    (state: State) => ({

    })
)(HeaderComponent);