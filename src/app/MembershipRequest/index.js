import React, {useState} from 'react';
import './membership-request.scss';
import Header from '../../components/layout/Header';

function MembershipRequest() {
    const [submited, setSubmited] = useState(false)

  return (
    <div className="membership-request">
        <Header />
        <div className="content">
            <form className={submited ? "hidden" : ""}>
                <h4 className="">MEMBERSHIP REQUEST</h4>
                <div className="form-group mt-5">
                    <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="form-group mt-4">
                    <input type="text" className="form-control" placeholder="Last Name" />
                </div>
                <div className="form-group mt-4">
                    <textarea className="form-control" rows="5" placeholder="Bio"></textarea>
                </div>
                <div className="form-group mt-4">
                    <input type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group mt-4">
                    <input type="text" className="form-control" placeholder="Phone" />
                </div>
                <div className="form-group mt-4">
                    <input type="button" className="btn btn-primary mt-5" value="SUBMIT" onClick={() => setSubmited(true)} />
                </div>
            </form>
            <div className={submited ? "" : "hidden"}>
                <h4>Thank you for your membership request!</h4>
                <h4 className="mt-5">We will get back to you shortly. In the mean time, please download the mobile app.</h4>
            </div>
        </div>
    </div>
  );
}

export default MembershipRequest;
