import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory 
} from "react-router-dom";

import Home from '../app/Home';
import Login from '../app/Auth/Login';
import LeftBar from '../components/layout/LeftBar';
import RightBar from '../components/layout/RightBar';
import Dashboard from '../app/Dashboard';
import StartClub from '../app/StartClub';
import HostEvent from "../app/HostEvent";
import InvitationRequests from "../app/InvitationRequests";
import Club from "../app/Club";
import MembershipRequest from "../app/MembershipRequest";

export default function Admin() {
    const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin') || false);

    useEffect(() => {
        setIsLogin(localStorage.getItem('isLogin') || false);
    }, [isLogin]);

    return (
        <Router>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            {isLogin ? <AdminRoute /> : <GuestRoute />}
        </Router>
    );
}

function GuestRoute() {
    return (
        <div className="app-main">

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/invitation-request">
                    <MembershipRequest />
                </Route>
                <Route exact path="/club">
                    <Club />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

function AdminRoute() {
    return (
        <div className="app-main">
            <LeftBar />
            <div className="main">

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/admin/invitation-requests">
                        <InvitationRequests />
                    </Route>
                    <Route exact path="/admin/host-event">
                        <HostEvent />
                    </Route>
                    <Route exact path="/admin/start-club">
                        <StartClub />
                    </Route>
                    <Route exact path="/admin/login">
                        <Login />
                    </Route>
                    <Route exact path="/admin/logout">
                        <Logout />
                    </Route>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
            <RightBar />
        </div>
    )
}

function Logout() {
    const history = useHistory();
    useEffect(() => {
        localStorage.clear();
        history.push('/');
        window.location.reload();
    })
    return (
        <div className="logout"></div>
    )
}