import React from 'react';
import './home.scss';
import {Link} from 'react-router-dom';
import ICMenuBar from '../../components/icons/ICMenuBar';

function Home() {
  return (
    <div className="home">
        <Link className="icon-menu" to={`login`}>
            <ICMenuBar />
        </Link>
        <div className="logo-wrapper">
            <img className="logo-img" src={require('../../assets/logo.png')} alt="logo" />
        </div>
    </div>
  );
}

export default Home;
