import * as types from "store/types";

export const eventsReducer = (events = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case types.UPDATE_EVENTS:
      return payload;
    default:
      return events;
  }
};
