import * as types from "store/types";

export const guestsReducer = (guests = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case types.UPDATE_GUESTS:
      return payload;
    default:
      return guests;
  }
};
