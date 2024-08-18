import React from 'react';
import {Link} from 'react-router-dom';

import s from './NavBar.module.scss';
function NavBar() {
    return (
        <div className={s.nav}>
                <div className={s.nav__logo}>
                    <Link to="/">Moon<span className={s.nav__logo__highlight}>Memo</span></Link>
                </div>
                <ul className={s.nav__list}>
                    <Link to="/">
                        <li className={s.nav__list__element}>HOME</li>
                    </Link>
                    <Link to="/react">
                        <li className={s.nav__list__element}>REACT</li>
                    </Link>
                    <Link to="/scss">
                        <li className={s.nav__list__element}>SCSS</li>
                    </Link>
                    <Link to="/css">
                        <li className={s.nav__list__element}>CSS</li>
                    </Link>
                </ul>
        </div>
    );
}

export default NavBar;
