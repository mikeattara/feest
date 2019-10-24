import React from "react";
import { Formik, Form, Field } from "formik";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "store/user/user-actions";

const initialForm = {
  username: "",
  password: "",
  email: ""
};

const Register = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values, location));
  };

  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={initialForm}
        onSubmit={handleSubmit}
        render={props => (
          <Form>
            <label>
              Email: <Field type="password" name="email" />
            </label>
            <label>
              Username: <Field type="text" name="name" />
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

export default Register;
