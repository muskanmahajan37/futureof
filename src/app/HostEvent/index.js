import React, {useState} from 'react';
import './host-event.scss';

function HostEvent() {
    const [step, setStep] = useState(0);

  return (
    <div className="host-event">
        <div className="content">
            <form className="club-setup-form mx-auto">
                <h4>CREATE EVENT</h4>
                <div className={step === 0 ? "form-first" : "form-first hidden"}>
                    <div className="form-group mt-4">
                        <label>EVENT NAME</label>
                        <input className="form-control" />
                    </div>
                    <div className="form-group mt-4">
                        <label>EVENT DESCRIPTION</label>
                        <small>Describe the event</small>
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                    <button 
                        type="button"
                        className="btn btn-primary mt-5"
                        onClick={() => setStep(1)}                    
                    >NEXT</button>
                </div>

                <div className={step === 1 ? "form-second" : "form-second hidden"}>
                    <h6>Clubs that can access event</h6>
                    <div className="row mt-4">
                        <div className="col-4">1</div>
                        <div className="col-4">2</div>
                        <div className="col-4">3</div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-4">1</div>
                        <div className="col-4">2</div>
                        <div className="col-4">3</div>
                    </div>
                    <button 
                        type="button"
                        className="btn btn-primary mt-5"
                        onClick={() => setStep(2)}                    
                    >NEXT</button>
                </div>

                <div className={step === 2 ? "form-third" : "form-third hidden"}>
                    <h6>Add Assemblies</h6>
                    <button 
                        type="button"
                        className="btn btn-primary mt-5"
                        onClick={() => setStep(3)}                    
                    >ADD</button>
                </div>

                <div className={step === 2 ? "form-third" : "form-third hidden"}>
                    <h6>Assembly Creation</h6>
                    <div className="form-group">
                        <label>EVENT THE TOPIC FOR THE ASSEMBLY</label>
                        <input type="text" placeholder="TOPIC" />
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label>EVENT THE TOPIC FOR THE ASSEMBLY</label>
                                <input type="text" placeholder="TOPIC" />
                            </div>
                        </div>
                        <div className="col-6">
                            <button type="button" className="btn btn-primary">Time</button>
                            <button type="button" className="btn btn-primary">AM/PM</button>
                        </div>
                    </div>
                    <div className="row">
                        <label>UPLOAD IMAGE</label>
                        <input type="file" />
                    </div>
                    
                    <button 
                        type="button"
                        className="btn btn-primary mt-5"
                        onClick={() => setStep(4)}                    
                    >NEXT</button>
                </div>

                <div className={step === 2 ? "form-third" : "form-third hidden"}>
                    <div className="form-group">
                        <label>CHOOSE THE HOST</label>
                        <input type="search" placeholder="SEARCH" />
                    </div>
                    <button 
                        type="button"
                        className="btn btn-primary mt-5"
                        onClick={() => setStep(5)}                    
                    >NEXT</button>
                </div>

                <div className={step === 2 ? "form-third" : "form-third hidden"}>
                    <h6>SETTINGS</h6>
                    <div className="form-group">
                        <label>INVITE MEMBERS</label>
                        OPEN MIC<input type="checkbox" />JOIN ON MUTE
                    </div>
                    <button 
                        type="button"
                        className="btn btn-primary mt-5"
                        onClick={() => setStep(5)}                    
                    >FINISH</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default HostEvent;
