const initialState = {
  firstName: "",
  lastName: "",
  skills: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
