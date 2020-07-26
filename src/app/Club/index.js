import React from 'react';
import './club.scss';
import {Link} from 'react-router-dom';
import Header from '../../components/layout/Header';

function Club() {
  return (
    <div className="club">
        <Header />
        <div className="content">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8 col-8 px-5">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-7 col-7">
                            <div className="banner-img-wrapper">
                                <img className="banner-img" src={require('../../assets/img/wind-power.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <h5 className="my-4">CLEAN ENERGY CLUB</h5>
                            <h6 className="my-4">1,552 Members</h6>
                            <p className="my-4">
                                Clean energy club focuses on topics related to energy transition and clean energy.
                                Part of proceeds are donated to Sierra club.
                            </p>
                            <h6>Upcoming Assemblies:</h6>
                            <a href='#'>@Clean_Energy_Club</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4 border-left px-5">
                    <Link className="btn btn-primary mt-4" to={`/invitation-request`}>JOIN</Link>
                    <p className="my-4">14 days free, $19/month dues</p>
                    <div className="profile my-4">
                        <div className="avatar-wrapper">
                            <img className="avatar" src={require('../../assets/avatar/profile.png')} alt="" />
                        </div>
                        <div className="profile-info">
                            <div className="profile-name">Robert Schuetzle</div>
                            <div className="profile-role">Club Manager</div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary-outline mt-4">MESSAGE</button>
                </div>
            </div>
            <h5 className="my-5 ml-3 pl-3">UPCOMING ASSEMBLIES <a href="#">Clean_Energy_Club</a></h5>
            <div className="row mt-5 mx-0 px-3">
                <div className="col-4">
                    <div className="club-card bg-wind-power">
                        <div className="text-center mt-4">
                            <img className="avatar" src={require('../../assets/avatar/profile.png')} alt="" />
                        </div>
                        <div className="card-text text-center mt-3">@Energy Club</div>
                        <div className="card-text text-center">55 Members</div>
                        <div className="text-center mt-4">
                            <button type="button" className="btn btn-primary">INVITE</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="club-card bg-electricity-energy">
                        <div className="text-center mt-4">
                            <img className="avatar" src={require('../../assets/avatar/profile.png')} alt="" />
                        </div>
                        <div className="card-text text-center mt-3">@Energy Club</div>
                        <div className="card-text text-center">55 Members</div>
                        <div className="text-center mt-4">
                            <button type="button" className="btn btn-primary">INVITE</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="club-card bg-solar-energy">
                        <div className="text-center mt-4">
                            <img className="avatar" src={require('../../assets/avatar/profile.png')} alt="" />
                        </div>
                        <div className="card-text text-center mt-3">@Energy Club</div>
                        <div className="card-text text-center">55 Members</div>
                        <div className="text-center mt-4">
                            <button type="button" className="btn btn-primary">INVITE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Club;
