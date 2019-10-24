import * as types from "store/types";
import { axiosWithAuth } from "helpers/auth";

const updateEvents = events => ({
  type: types.UPDATE_EVENTS,
  payload: events
});

export const fetchEvents = () => dispatch => {
  const id = localStorage.getItem("id");
  axiosWithAuth()
    .get(`/users/${id}/events`)
    .then(({ data }) => {
      dispatch(updateEvents(data));
    })
    .catch(error => {
      console.error(error);
    });
};
