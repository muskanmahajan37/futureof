import React, {useState} from 'react';
import './login.scss';
import { useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    email: null,
    password: null
  });

  const login = () => {
    console.log('credentials: ', credentials);
    localStorage.setItem('isLogin', true);
    localStorage.setItem('loginData', credentials);
    if(localStorage.getItem('isLogin')) {
      history.push("/");
      window.location.reload();
    }
  }

  return (
    <div className="login">
      <form className="login-form">
        <h4 className="text-center mb-5">LOGIN</h4>
        <div className="form-group">
          <label>EMAIL</label>
          <input 
            type="email" 
            className="form-control" 
            onChange={(e) => setCredentials({...credentials, email: e.target.value})}
            />
        </div>
        <div className="form-group">
          <label>PASSWORD</label>
          <input 
            type="password" 
            className="form-control" 
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            />
        </div>
        <button 
          type="button" 
          className="btn btn-primary w-100 mt-3"
          onClick={() => login()}
        >LOGIN</button>
      </form>
    </div>
  );
}

export default Login;
