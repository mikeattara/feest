import axios from "axios";
import * as types from "store/types";

const updateUser = user => ({
  type: types.UPDATE_USER,
  payload: user
});

export const login = (username, password) => dispatch => {
  axios
    .post("/users/login", { username, password })
    .then(({ data }) => {
      dispatch(updateUser(data));
    })
    .catch(error => {
      console.error(error.message);
    });
};

export const register = (user, location) => dispatch => {
  axios
    .post("/users/register", user)
    .then(res => {
      location.push("/login");
    })
    .catch(error => {
      console.error(error);
    });
};
