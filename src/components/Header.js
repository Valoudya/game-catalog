import React from 'react';
import MenuNav from "./MenuNav";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header__menu">
                    <div className="header__menu__logo">
                        <a href="">GameCatalog</a>
                    </div>
                    <div className="header__menu__nav">
                        <MenuNav/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;