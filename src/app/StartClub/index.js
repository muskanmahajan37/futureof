import React, {useState} from 'react';
import './start-club.scss';

function StartClub() {
    const [btnBannerImage, SetBtnBannerImage] = useState(null);
    const [btnMobileIcon, SetBtnMobileIcon] = useState(null);
    const [step, setStep] = useState(0);

  return (
    <div className="start-club">
        <div className="content">
            <form className="club-setup-form mx-auto">
                <div className={step === 0 ? "form-first" : "form-first hidden"}>
                    <h4>CLUB SETUP</h4>
                    <div className="form-group mt-4">
                        <label className="text-secondary">CLUB NAME</label>
                        <input className="form-control" />
                    </div>
                    <div className="form-group mt-4">
                        <label className="text-secondary">CLUB NAME</label>
                        <small className="text-secondary">Describe your Club and set the tone and expectations for members</small>
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                    <div className="form-group mt-4">
                        <label className="text-secondary">CLUB INTERESTS(ADD UP TO 3)</label>
                        <div className="row py-1">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <label className="d-flex text-secondary"><input type="checkbox" className="form-control mr-2" />RENEWABLE ENERGY</label>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <label className="d-flex text-secondary"><input type="checkbox" className="form-control mr-2" />OIL AND GAS</label>
                            </div>
                        </div>
                        <div className="row py-1">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <label className="d-flex text-secondary"><input type="checkbox" className="form-control mr-2" />AUTONOMOUS VEHICLES</label>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <label className="d-flex text-secondary"><input type="checkbox" className="form-control mr-2" />CLEAN TECHNOLOGY</label>
                            </div>
                        </div>
                        <div className="row py-1">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <label className="d-flex text-secondary"><input type="checkbox" className="form-control mr-2" />AI IN ENERGY</label>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <label className="d-flex text-secondary"><input type="checkbox" className="form-control mr-2" />FUEL CELL TECHNOLOGY</label>
                            </div>
                        </div>
                        <div className="row py-1">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <label className="d-flex text-secondary"><input type="checkbox" className="form-control mr-2" />SOLAR POWER</label>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <label className="d-flex text-secondary"><input type="checkbox" className="form-control mr-2" />WIND POWER</label>
                            </div>
                        </div>
                    </div>
                    <button 
                        type="button"
                        className="btn btn-primary mt-5"
                        onClick={() => setStep(1)}                    
                    >NEXT</button>
                </div>

                <div className={step === 1 ? "form-second" : "form-second hidden"}>
                <h4>CLUB SETUP</h4>
                    <div className="form-group mt-4">
                        <label className="text-secondary">CLUB DUES</label>
                        <br />
                        <label>
                            <input type="checkbox" className="mt-3 mr-4" /><span className="badge badge-primary"><sup>$</sup>19</span>
                        </label>
                    </div>
                    <div className="form-group mt-4">
                        <label className="text-secondary">SET PRIMARY TIMEZONE</label>
                        <input type="text" className="form-control text-secondary" />
                    </div>
                    <div className="form-group mt-4">
                        <label className="text-secondary">CLUB INTERESTS(ADD UP TO 3)</label>
                        <div className="row py-1">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <label className="text-secondary pr-5">UPLOAD A BANNER IMAGE FOR THE CLUB</label>
                                <input type="file" className="form-control hidden" ref={input => SetBtnBannerImage(input)} />
                                <button type="button" className="btn btn-upload" onClick={() => btnBannerImage.click()}></button>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <label className="text-secondary pr-5">UPLOAD AN ICON IMAGE FOR THE MOBILE APP</label>
                                <input type="file" className="form-control hidden" ref={input => SetBtnMobileIcon(input)} />
                                <button type="button" className="btn btn-upload" onClick={() => btnMobileIcon.click()}></button>
                            </div>
                        </div>
                    </div>
                    <button 
                        type="button"
                        className="btn btn-primary mt-5"
                        onClick={() => setStep(2)}                    
                    >NEXT</button>
                </div>

                <div className={step === 2 ? "form-third" : "form-third hidden"}>
                <h4>CLUB SETUP</h4>
                    <div className="form-group mt-4">
                        <label className="mt-4 text-secondary">YOUR CLUB SETUP IS ALMOST COMPLETE:</label>
                        <label className="mt-4 text-secondary">HERE IS A LINK TO YOUR MEMBERSHIP LANDING PAGE. YOU MAY COPY THIS AND SEND THIS TO PROSPECTIVE MEMBERS.</label>
                        <input className="form-control text-primary mt-4" placeholder="https://" />
                        <label className="mt-4 text-secondary">VERIFICATION BY YOU OR AUTHO CO-MANAGER TO JOIN THE CLUB IS REQUIRED TO COMPLETE THE MEMBERSHIP REQUEST.</label>
                    </div>
                    <button 
                        type="button"
                        className="btn btn-primary mt-5"
                        onClick={() => setStep(0)}                    
                    >Finish</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default StartClub;
