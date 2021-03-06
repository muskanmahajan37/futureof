import React from 'react';
import './rightbar.scss';
import {Link} from 'react-router-dom';

function RightBar() {
  return (
    <div className="right-bar">
        <div className="profile-wrapper">
            <div className="profile-img-wrapper">
                <img className="profile-img" src={require('../../../assets/avatar/profile.png')} alt="profile" />
            </div>
            <div className="site-role">
                BASIC MEMBER
            </div>
            <div className="profile-name">
                Robert Schuetzle
            </div>
            <div className="profile-role">
                CEO, Greyrock
            </div>
        </div>
        <div className="nav-wrapper">
            <nav className="nav">
                <Link className="nav-item" to={`/admin/start-club`}>
                    START A CLUB
                </Link>
                <Link className="nav-item" to={`/admin/host-event`}>
                    HOST EVENT
                </Link>
                <Link className="nav-item" to={`/admin/invitation-requests`}>
                    INVITATION REQUESTS
                </Link>
                <Link className="nav-item" to={`/admin/logout`}>
                    LOGOUT
                </Link>
            </nav>
        </div>
        <div className="right-bar-info">
            <h5 className="d-flex">
                Member Score:
                <div className="circle-score-wrapper">456</div>
            </h5>
            <p>Reach 1000 to become Silver Member</p>
            <h5 className="">Club Manager: </h5>
            <p>The Energy Club: 10 Members</p>
            <h5 className="">Club Memberships: </h5>
            <p>Hello Energy Club: 75 Members</p>
            <p>Assembly Energy Club: 50 Members</p>
        </div>
    </div>
  );
}

export default RightBar;
