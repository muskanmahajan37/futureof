import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../app/Home';
import Login from '../app/Auth/Login';
import LeftBar from '../components/layout/LeftBar';
import RightBar from '../components/layout/RightBar';
import Dashboard from '../app/Dashboard';
import StartClub from '../app/StartClub';
import HostEvent from "../app/HostEvent";
import InvitationRequests from "../app/InvitationRequests";

export default function Admin() {
    const [isLogin, setIsLogin] = useState(true);

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
        <Router>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
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
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
            <RightBar />
        </div>
    )
}