import React from "react";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "store/user/user-actions";

const initialForm = {
  username: "",
  password: ""
};

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values, history));
  };

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={initialForm}
        onSubmit={handleSubmit}
        render={props => (
          <Form>
            <label>
              Username: <Field type="text" name="username" />
            </label>
            <label>
              Password: <Field type="password" name="password" />
            </label>
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button type="submit">Login</button>
          </Form>
        )}
      />
    </div>
  );
};

export default Login;
