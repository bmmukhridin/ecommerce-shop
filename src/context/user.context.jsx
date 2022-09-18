import React, { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListner,
  createUserDocumentFromAuth,
} from "../components/utils/firebase/firebase";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURENT_USER: "SET_CURENT_USER",
};

const userReducer = (state, action) => {
  //console.log("dispatch")
  console.log(action)
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in the userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {

  //const [currentUser, setCurrentUser] = useState(null);
  
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser)

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURENT_USER, payload: user });
  };
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
