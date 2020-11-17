import { withRouter, Router } from 'next/router';
import { connect, Dispatch } from 'react-redux';
import { CSSReset, ThemeProvider, theme } from '@chakra-ui/react';
import App, { AppContext, AppInitialProps } from 'next/app';

import { State } from '../redux/Reducer';
import { wrapper } from '../redux/Reducer';

export interface AppProps extends AppInitialProps {
  dispatch: Dispatch;
  router: Router;
  jwk: any;
  address: string;
}

class WrappedApp extends App<AppProps> {
  public componentDidMount() {
    if (!this.props.address) {
      try {
        const jwk = JSON.parse(localStorage.getItem('jwk'));
        const address = localStorage.getItem('address');
        
        if (jwk && address) {
          this.props.dispatch({ type: 'UPDATE_JWK', jwk });
          this.props.dispatch({ type: 'UPDATE_ADDRESS', address });
    
          console.log('An existing JWK was found, redirecting to wallet');
          this.props.router.push('/wallet');
        } else {
          console.log('No existing JWK found, redirecting to onboarding');
          this.props.router.push('/');
        }
      } catch (error) {
        console.log('No existing JWK found, redirecting to onboarding');
        this.props.router.push('/');
      }
    }
  }

  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        appProp: ctx.pathname
      }
    };
  };

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CSSReset/>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default wrapper.withRedux(
  connect(
    (state: State) => ({
      jwk: state.jwk,
      address: state.address,
    })
  )
  (withRouter(WrappedApp))
);
