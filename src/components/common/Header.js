import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import logoImg from '../../assets/images/logo-200x100.jpg';

import If from './If';

export default class Header extends React.Component {

    logOut(){

        sessionStorage.removeItem('_userLogin');
        localStorage.removeItem('_userLogin');

        //this.props.history.push('/')
        //this.props.history.replace('/admin') //.push('/admin');
        
        //window.location.reload();
    }

    render(){
        return (
            <StyledHeader>
                
                    <div className="col">

                        <StyledNavLogo className="navbar">
                            <Link href="/">
                                <a className='nav-brand'><img src={logoImg} alt="logo-img" /></a>
                            </Link>
                        </StyledNavLogo>

                    </div>

                    <MidHeader className="col">

                        <h6>CABEÇALHO</h6>
                        
                    </MidHeader>

                    <div className="col d-flex">

                        <If test={this.props.login}>
                            <StyledAdminNavWrapper>
                                <Link href='/admin'>
                                    <a className='btn'>Login <i className="fa fa-sign-in" /></a>
                                </Link>
                            </StyledAdminNavWrapper>
                        </If>

                        <If test={this.props.admin}>
                            <StyledAdminNavWrapper>
                                <Link href='/'>
                                    <a className='btn' onClick={() => this.logOut()}>
                                        Logout <i className="fa fa-sign-out" />
                                    </a>
                                </Link>
                            </StyledAdminNavWrapper>
                        </If>

                    </div>  
                    
            </StyledHeader>
        );
    }
}

const StyledHeader = styled.header`
    display: flex;
    height: 100px;
    background: grey;
`;

const StyledNavLogo = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    z-index: 10;
`;

const StyledAdminNavWrapper = styled.nav`
    position: absolute;
    right: 1px;
    bottom: 1px;
    z-index: 10;
`;

const MidHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        display: none;
    }
`;