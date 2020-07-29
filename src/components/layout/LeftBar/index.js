import React from 'react';
import './leftbar.scss';
import {Link} from 'react-router-dom';

function LeftBar() {
  return (
    <div className="left-bar">
        <div className="logo-wrapper">
          <Link to={`/`}>
            <img className="logo-img" src={require('../../../assets/logo.png')} alt="logo" />
          </Link>
        </div>
    </div>
  );
}

export default LeftBar;
