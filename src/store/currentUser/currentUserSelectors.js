import { createSelector } from "reselect";

export const userSelector = state => state.user;

export const userToken = createSelector(
  [userSelector],
  user => user.token
);

export const userIdSelector = createSelector(
  [userSelector],
  user => user.id
);
