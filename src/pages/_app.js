import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";

import makeStore from '../redux/MakeStore';

import GlobalStyles from './_globalStyles';

import Toast from '../components/common/Toast';

class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {

        // we can dispatch from here too
        //ctx.store.dispatch({type: 'FOO', payload: 'foo'});

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return { pageProps };
    }

    render() {

        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>

                <GlobalStyles />
                <Toast />
                <Component {...pageProps} />

            </Provider>
        );
    }

}

export default withRedux(makeStore)(MyApp);