import * as types from "store/types";

const initialUser = {
  token: null,
  id: null
};

const userReducer = (user = initialUser, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.UPDATE_USER:
      return {
        token: payload.token,
        id: payload.user_id
      };
    default:
      return user;
  }
};

export default userReducer;
