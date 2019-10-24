import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Login from "pages/login";
import Register from "pages/register";

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Redirect to="/register" />
    </Switch>
  );
}

export default App;
