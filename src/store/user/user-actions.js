import axios from "axios";
import * as types from "store/types";

axios.defaults.baseURL = "https://potluck-planner-bw.herokuapp.com";

const updateUser = user => ({
  type: types.UPDATE_USER,
  payload: user
});

export const login = (user, history) => dispatch => {
  axios
    .post("/users/login", user)
    .then(({ data }) => {
      dispatch(updateUser(data));
      localStorage.setItem("token", data.token);
      history.push("/success");
    })
    .catch(error => {
      console.error(error.message);
    });
};

export const register = (user, history) => dispatch => {
  axios
    .post("/users/register", user)
    .then(res => {
      history.push("/login");
    })
    .catch(error => {
      console.error(error);
    });
};
