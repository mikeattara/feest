const initialUser = {
  token: null,
  id: null
};

const userReducer = (user = initialUser, action) => {
  switch (action.type) {
    default:
      return user;
  }
};

export default userReducer;
