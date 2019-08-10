import PropTypes from "prop-types";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Profile from "../Routes/Profile";
import Search from "../Routes/Search";

const LoggendInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/explore" component={Explore} />
        <Route path="/search" component={Search} />
        <Route path="/:username" component={Profile} />
    </Switch>
);

const LoggendOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={Auth} />
    </Switch>
);

const AppRouter = ({isLoggedIn}) => (
    isLoggedIn ? <LoggendInRoutes/> : <LoggendOutRoutes/>
);

AppRouter.propTypes = {
    isLoggedIn : PropTypes.bool.isRequired
};

export default AppRouter;