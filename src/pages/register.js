import React from "react";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "store/user/user-actions";

const initialForm = {
  username: "",
  password: "",
  email: "",
  full_name: ""
};

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values, history));
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
              Full name: <Field type="text" name="full_name" />
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
