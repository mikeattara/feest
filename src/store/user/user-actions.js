import * as types from "store/types";
import { axiosWithAuth } from "utitlities/auth";

const updateUser = user => ({
  type: types.UPDATE_USER,
  payload: user
});

export const login = (username, password) => dispatch => {
  axiosWithAuth()
    .post("/users/login", { username, password })
    .then(({ data }) => {
      dispatch(updateUser(data));
    })
    .catch(error => {
      console.error(error.message);
    });
};
