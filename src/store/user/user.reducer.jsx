import  {USER_ACTION_TYPES} from "./user.type";

const INITIAL_STATE = {
  currentUser: null,
};
export const userReducer = (state = INITIAL_STATE, action) => {
  //console.log("dispatch")
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};
