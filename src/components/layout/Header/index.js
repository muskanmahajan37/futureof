import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="header">
        <div className="header-logo">
          <Link to={`/`}>
            <img className="logo" src={require('../../../assets/logo.png')} alt="" />
          </Link>
        </div>
    </div>
  );
}

export default Header;
