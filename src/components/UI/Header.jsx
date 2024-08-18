import React from 'react';

import s from './Header.module.scss';

import Container from './Container';
import NavBar from './NavBar';
function Header() {
    return (
        <div className={s.header}>
            <Container>
                <NavBar></NavBar>
            </Container>
        </div>
    );
}

export default Header;
