import React, {useState} from 'react';
import './invitation-requests.scss';

function InvitationRequests() {
    const [step, setStep] = useState(0);

  return (
    <div className="invitation-requests">
        <div className="content">
            <form className="mx-auto px-5">
                <h4>MEMBERSHIP REQUESTS</h4>
                <div className={step === 0 ? "form-lg" : "form-lg hidden"}>
                    <div className="row mt-5 mx-0">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>FIRST NAME</th>
                                    <th>LAST NAME</th>
                                    <th>EMAIL</th>
                                    <th>PHONE</th>
                                    <th>BIO</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ROBERT</td>
                                    <td>JOHNSON</td>
                                    <td>RJON@GMAIL.COM</td>
                                    <td>111-111-1111</td>
                                    <td>XXXXXXXXXXXXXXXXX XXXXXXXXXXXXXX</td>
                                    <td className="d-flex h-100">
                                        <button type="button" className="btn btn-primary">APPROVE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
