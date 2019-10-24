import axios from "axios";
import * as types from "store/types";

axios.defaults.baseURL = "https://potluck-planner-bw.herokuapp.com";

const updateUser = user => ({
  type: types.UPDATE_CURRENT_USER,
  payload: user
});

export const login = (user, redirect) => dispatch => {
  axios
    .post("/users/login", user)
    .then(({ data }) => {
      dispatch(updateUser(data));
      localStorage.setItem("token", data.token);
      redirect();
    })
    .catch(error => {
      console.error(error.message);
    });
};

export const register = (user, redirect) => dispatch => {
  axios
    .post("/users/register", user)
    .then(res => {
      redirect();
    })
    .catch(error => {
      console.error(error);
    });
};
