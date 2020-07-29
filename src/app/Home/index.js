import React, {useState} from 'react';
import './home.scss';
import {Link} from 'react-router-dom';
import ICMenuBar from '../../components/icons/ICMenuBar';

function Home() {
  const [menuState, setMenuState] = useState(false);

  return (
    <div className="home">
        <div className="nav-wrapper">
          <div className="icon-menu" onClick={() => setMenuState(!menuState)}>
              <ICMenuBar />
          </div>
          <div className={menuState ? "menu open" : "menu"}>
            <div className="nav">
              <Link className="nav-item" to={`/club`}>Club</Link>
              <Link className="nav-item" to={`/login`}>Login</Link>
            </div>
          </div>
        </div>
        <div className="logo-wrapper">
            <img className="logo-img" src={require('../../assets/logo.png')} alt="logo" />
        </div>
    </div>
  );
}

export default Home;
