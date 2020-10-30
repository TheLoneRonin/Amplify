import { connect } from 'react-redux';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import App, { AppContext, AppInitialProps } from 'next/app';

import { State } from '../redux/Reducer';
import { wrapper } from '../redux/Reducer';

class WrappedApp extends App<AppInitialProps> {

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
      <ThemeProvider>
        <CSSReset/>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default wrapper.withRedux(
  connect(
    (state: State) => ({

    })
  )
  (WrappedApp)
);
