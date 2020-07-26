import React, {useState} from 'react';
import './host-event.scss';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Switch from "react-switch";

function HostEvent() {
    const [step, setStep] = useState(2);
    const [startDate, setStartDate] = useState( new Date() );
    const [btnDefaultImage, SetBtnDefaultImage] = useState(null);
    const [checked, setChecked] = useState(false);

  return (
    <div className="host-event">
        <div className="content">
            <div className="create-event-form mx-auto">
                <h4>CREATE EVENT</h4>
                <div className={step === 0 ? "form-md" : "form-md hidden"}>
                    <div className="form-group mt-4">
                        <label>EVENT NAME</label>
                        <input className="form-control" />
                    </div>
                    <div className="form-group mt-4">
                        <label>EVENT DESCRIPTION</label>
                        <br />
                        <small>Describe the event</small>
                        <textarea className="form-control mt-2" rows="5"></textarea>
                    </div>
                    <button 
                        type="button"
                        className="btn btn-primary mt-5"
                        onClick={() => setStep(1)}                    
                    >NEXT</button>
                </div>

                <div className={step === 1 ? "form-lg" : "form-lg hidden"}>
                    <h5 className="mt-5">Clubs that can access event</h5>
                    <div className="row mt-5">
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
                    <div className="row mt-5">
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
                    <button 
                        type="button"
                        className="btn btn-primary mt-5 ml-5"
                        onClick={() => setStep(2)}                    
                    >NEXT</button>
                </div>

                <div className={step === 2 ? "form-md" : "form-md hidden"}>
                    <h5 className="mt-5">Add Assemblies</h5>
                    <button 
                        type="button"
                        className="btn btn-primary mt-3"
                        onClick={() => setStep(3)}                    
                    >ADD</button>

                    <div className="row mt-5 mx-0">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Date/Time</th>
                                    <th>Host</th>
                                    <th>Mic</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Energy Talk</td>
                                    <td>Quic chat on energy topics</td>
                                    <td>July, 10, 2020 2pm Pacific time</td>
                                    <td>Robert Schuetzle</td>
                                    <td>Join on Mute</td>
                                    <td className="d-flex h-100">
                                        <button type="button" className="btn btn-primary">Edit</button>
                                        <button type="button" className="btn btn-primary">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={step === 3 ? "form-md" : "form-md hidden"}>
                    <h6>Assembly Creation</h6>
                    <div className="form-group">
                        <label>EVENT THE TOPIC FOR THE ASSEMBLY</label>
                        <input type="text" className="form-control" placeholder="TOPIC" />
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label>WHEN WILL THE ASSEMBLY START?</label>
                                <DatePicker
                                    className="form-control"
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    timeInputLabel="Time:"
                                    dateFormat="MM/dd/yyyy h:mm aa"
                                    showTimeInput
                                />
                            </div>
                        </div>
                        <div className="col-6 d-flex pt-4 pb-2">
                            <button type="button" className="btn btn-primary m-1">Time</button>
                            <button type="button" className="btn btn-primary m-1">AM/PM</button>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>UPLOAD IMAGE</label>
                        <br />
                        <input type="file" className="form-control hidden" ref={input => SetBtnDefaultImage(input)} />
                        <button type="button" className="btn btn-upload" onClick={() => btnDefaultImage.click()}></button>
                    </div>
                    
                    <button 
                        type="button"
                        className="btn btn-primary mt-5"
                        onClick={() => setStep(4)}                    
                    >NEXT</button>
                </div>

                <div className={step === 4 ? "form-md" : "form-md hidden"}>
                    <div className="form-group mt-5">
                        <label>CHOOSE THE HOST</label>
                        <input type="search" className="form-control" placeholder="SEARCH" />
                    </div>
                    <div className="search-result mt-5">
                        <div className="row search-item">
                            <img className="avatar" src={require('../../assets/avatar/profile.png')} alt="" />
                            <div className="profile-info">
                                <div className="profile-name">Robert Schuetzle</div>
                                <div className="profile-role">CEO, Greyrok</div>
                            </div>
                            <button type="button" className="btn btn-primary">SELECT</button>
                        </div>
                        <div className="row search-item">
                            <img className="avatar" src={require('../../assets/avatar/profile.png')} alt="" />
                            <div className="profile-info">
                                <div className="profile-name">Robert Schuetzle</div>
                                <div className="profile-role">CEO, Greyrok</div>
                            </div>
                            <button type="button" className="btn btn-primary">SELECT</button>
                        </div>
                    </div>
                    <button 
                        type="button"
                        className="btn btn-primary mt-5"
                        onClick={() => setStep(5)}                    
                    >NEXT</button>
                </div>

                <div className={step === 5 ? "form-md" : "form-md hidden"}>
                    <h6>SETTINGS</h6>
                    <div className="form-group">
                        <label>INVITE MEMBERS</label>
                        <br />
                        <div className="d-flex mt-3">
                            <span>OPEN MIC</span>
                            <Switch className="mx-3" onChange={setChecked} checked={checked} onColor="#3a81bf" checkedIcon="" uncheckedIcon="" />
                            <span>JOIN ON MUTE</span>
                        </div>
                    </div>
                    <button 
                        type="button"
                        className="btn btn-primary mt-5"
                        onClick={() => setStep(2)}                    
                    >FINISH</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HostEvent;
