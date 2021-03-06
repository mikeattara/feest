import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PrivateRoute from "components/PrivateRoute";
import Dashboard from "pages/Dashboard";
import Login from "pages/Login";
import Register from "pages/Register";

const App = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Redirect to="/register" />
    </Switch>
  );
};

export default App;
