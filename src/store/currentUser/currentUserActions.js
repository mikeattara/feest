import axios from "axios";
import * as types from "store/types";

axios.defaults.baseURL = "https://potluck-backend.herokuapp.com";

const updateUser = user => ({
  type: types.UPDATE_CURRENT_USER,
  payload: user
});

export const login = (user, redirect) => dispatch => {
  axios
    .post("/api/auth/login", user)
    .then(({ data }) => {
      const { id, token } = data;
      console.log(data);
      dispatch(updateUser({ id, token }));
      localStorage.setItem("token", token);
      localStorage.setItem("id", id);
      redirect();
    })
    .catch(error => {
      console.error(error.message);
    });
};

export const register = (user, redirect) => dispatch => {
  axios
    .post("/api/auth/register", user)
    .then(res => {
      redirect();
    })
    .catch(error => {
      console.error(error);
    });
};
