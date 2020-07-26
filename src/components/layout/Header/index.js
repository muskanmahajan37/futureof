import React from 'react';
import './header.scss';

function Header() {
  return (
    <div className="header">
        <div className="header-logo">
            <img className="logo" src={require('../../../assets/logo.png')} alt="" />
        </div>
    </div>
  );
}

export default Header;
