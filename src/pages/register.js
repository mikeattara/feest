import React from "react";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "store/currentUser/currentUserActions";

const initialForm = {
  username: "",
  password: "",
  email: ""
};

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const redirect = () => {
    history.push("/login");
  };

  const handleSubmit = (values, actions) => {
    dispatch(register(values, redirect));
  };

  return (
    <div>
      <h1>Register</h1>
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
            <label>
              Email: <Field type="text" name="email" />
            </label>

            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button type="submit">Register</button>
          </Form>
        )}
      />
    </div>
  );
};

export default Register;
