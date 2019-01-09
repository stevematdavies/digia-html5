import React from 'react';
import Logo from './Logo';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header__brand">
                    <Logo />
                    <span className="header__brand-text">Alord Software</span>
                </div>
               <div className="header__content"></div>
            </div>
        )
    }
}

export default Header;
