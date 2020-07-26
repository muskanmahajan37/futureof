import React, {useState} from 'react';
import './start-club.scss';

function StartClub() {
    const [step, setStep] = useState(0);

  return (
    <div className="start-club">
        <div className="content">
            <form className="club-setup-form mx-auto">
                <div className={step === 0 ? "form-first" : "form-first hidden"}>
                    <h4>CLUB SETUP</h4>
                    <div className="form-group mt-4">
                        <label>CLUB NAME</label>
                        <input className="form-control" />
                    </div>
                    <div className="form-group mt-4">
                        <label>CLUB NAME</label>
                        <small>Describe your Club and set the tone and expectations for members</small>
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                    <div className="form-group mt-4">
                        <label>CLUB INTERESTS(ADD UP TO 3)</label>
                        <div className="row py-1">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <input type="checkbox" className="mr-2" />RENEWABLE ENERGY
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <input type="checkbox" className="mr-2" />OIL AND GAS
                            </div>
                        </div>
                        <div className="row py-1">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <input type="checkbox" className="mr-2" />AUTONOMOUS VEHICLES
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <input type="checkbox" className="mr-2" />CLEAN TECHNOLOGY
                            </div>
                        </div>
                        <div className="row py-1">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <input type="checkbox" className="mr-2" />AI IN ENERGY
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <input type="checkbox" className="mr-2" />FUEL CELL TECHNOLOGY
                            </div>
                        </div>
                        <div className="row py-1">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <input type="checkbox" className="mr-2" />SOLAR POWER
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <input type="checkbox" className="mr-2" />WIND POWER
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
                        <label>CLUB DUES</label>
                        <input type="checkbox" /> <span>$19</span>
                    </div>
                    <div className="form-group mt-4">
                        <label>SET PRIMARY TIMEZONE</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group mt-4">
                        <label>CLUB INTERESTS(ADD UP TO 3)</label>
                        <div className="row py-1">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <label>UPLOAD A BANNER IMAGE FOR THE CLUB</label>
                                <input type="file" className="mr-2" />
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <label>UPLOAD AN ICON IMAGE FOR THE MOBILE APP</label>
                                <input type="file" className="mr-2" />
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
                        <label>YOUR CLUB SETUP IS ALMOST COMPLETE:</label>
                        <label>HERE IS A LINK TO YOUR MEMBERSHIP LANDING PAGE. YOU MAY COPY THIS AND SEND THIS TO PROSPECTIVE MEMBERS.</label>
                        <input className="form-control" placeholder="https://" />
                        <label>VERIFICATION BY YOU OR AUTHO CO-MANAGER TO JOIN THE CLUB IS REQUIRED TO COMPLETE THE MEMBERSHIP REQUEST.</label>
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
