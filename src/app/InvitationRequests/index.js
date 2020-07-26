import React, {useState} from 'react';
import './invitation-requests.scss';

function InvitationRequests() {
    const [step, setStep] = useState(0);

  return (
    <div className="invitation-requests">
        <div className="content">
            <form className="club-setup-form mx-auto">
                <h4>MEMBERSHIP REQUESTS</h4>
                <div className={step === 0 ? "form-first" : "form-first hidden"}>
                    <div className="form-group mt-4">
                        <label>EVENT NAME</label>
                        <input className="form-control" />
                    </div>
                    <button 
                        type="button"
                        className="btn btn-primary mt-5"
                        onClick={() => setStep(1)}                    
                    >FINISH</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default InvitationRequests;
