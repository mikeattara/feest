import axios from "axios";
import * as types from "store/types";

axios.defaults.baseURL = "https://potluck-planner-bw.herokuapp.com";

const updateUser = user => ({
  type: types.UPDATE_USER,
  payload: user
});

export const login = (user, location) => dispatch => {
  axios
    .post("/users/login", user)
    .then(({ data }) => {
      dispatch(updateUser(data));
      location.push("/");
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
