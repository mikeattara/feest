import * as types from "store/types";

const initialUser = {
  token: null,
  id: null
};

export const currentUserReducer = (user = initialUser, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.UPDATE_CURRENT_USER:
      return {
        token: payload.token,
        id: payload.user_id
      };
    default:
      return user;
  }
};
