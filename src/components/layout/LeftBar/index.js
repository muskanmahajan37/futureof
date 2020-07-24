import React from 'react';
import './leftbar.scss';

function LeftBar() {
  return (
    <div className="left-bar">
        <div className="logo-wrapper">
            <img className="logo-img" src={require('../../../assets/logo.png')} alt="logo" />
        </div>
    </div>
  );
}

export default LeftBar;
