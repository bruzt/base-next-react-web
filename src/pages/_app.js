import React from "react";
//import { createStore } from "redux";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";

import makeStore from '../redux/store';

import GlobalStyles from './_globalStyles';

import Toast from '../components/common/Toast';

/*const makeStore = (initialState, options) => {
    return createStore(reducer, initialState);
};*/

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {

        // we can dispatch from here too
        //ctx.store.dispatch({type: 'FOO', payload: 'foo'});

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return { pageProps };
    }

    render() {

        const {Component, pageProps, store} = this.props;

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