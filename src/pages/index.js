import React from 'react';
import Head from 'next/head';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import MenuPublic from '../components/public/template/MenuPublic';
import MainPublic from '../components/public/template/MainPublic';
import RightPanelPublic from '../components/public/template/RightPanelPublic';

export default function Home() {

    return (
        <React.Fragment>
            <Head>
                <title>Home</title>
            </Head>
            
            <div className='container-fluid'>
                <div className="row">
                    <div className="col p-0">
                        
                        <Header login='true' />

                    </div>
                </div>
                
                <div className="row">
                    <div className="col p-0">

                        <MenuPublic />

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 p-0">

                        <MainPublic />

                    </div>

                    <div className="col-lg-4 p-0">

                        <RightPanelPublic />

                    </div>
                </div>

            </div>
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col p-0">

                        <Footer />

                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}