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
import CreateEvent from "../app/CreateEvent";

export default function Admin() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <Router>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                {isLogin ? <AdminRoute /> : <GuestRoute />}
            </Switch>
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
                <Router>

                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/create-event" exact>
                            <CreateEvent />
                        </Route>
                        <Route path="/start-club" exact>
                            <StartClub />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/">
                            <Dashboard />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <RightBar />
        </div>
    )
}