import * as types from "store/types";

const initialUser = {
  token: localStorage.getItem("token"),
  id: localStorage.getItem("id")
};

export const currentUserReducer = (user = initialUser, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.UPDATE_CURRENT_USER:
      return {
        token: payload.token,
        id: payload.id
      };
    default:
      return user;
  }
};
