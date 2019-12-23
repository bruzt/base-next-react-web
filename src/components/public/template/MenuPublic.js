import React from 'react';
import styled from 'styled-components';

export default function MenuPublic() {

    return (
        <StyledNav className='navbar' id='menu-public'>
            NAVEGAÇÃO
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    display: flex;
    height: 50px;
    justify-content: center;
    border-bottom: 1px solid black
`;