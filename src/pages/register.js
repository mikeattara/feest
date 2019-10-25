import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "store/currentUser/currentUserActions";

const initialForm = {
  username: "",
  password: "",
  email: ""
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  form {
    max-width: 35rem;
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 2rem;

    legend {
      font-size: 4rem;
      text-align: center;
      padding-bottom: 1.5rem;
    }

    input {
      display: block;
      padding: 0.4rem;
      margin-bottom: 1.2rem;
      width: 100%;
    }

    button {
      margin-top: 1.2rem;
      padding: 1rem;
      width: 100%;
      cursor: pointer;
    }

    p {
      margin-top: 1rem;
    }
  }
`;

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
    <Container>
      <Formik
        initialValues={initialForm}
        onSubmit={handleSubmit}
        render={props => (
          <Form>
            <legend>Register</legend>
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
            <p>
              Already registered, <Link to="/login">login</Link>
            </p>
          </Form>
        )}
      />
    </Container>
  );
};

export default Register;
