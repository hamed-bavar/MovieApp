import React from "react";
import { axiosIns } from "../../index";
import createPersistedReducer from "use-persisted-reducer";
const usePersistedReducer = createPersistedReducer("authState");
const authContext = React.createContext();
const authContextDispatch = React.createContext();
const initialState = {
  token: null,
  loading: null,
  error: null,
  expire: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { ...state, loading: true };
    case "logout":
      return {
        ...state,
        loading: null,
        token: null,
        error: null,
        expire: null,
      };
    case "success":
      return {
        ...state,
        loading: null,
        token: action.payload.token,
        expire: action.payload.expire,
        error: null,
      };
    case "fail":
      return { ...state, error: true, loading: null, token: null, expire: null };
    default:
      throw new Error();
  }
};
const AuthProvider = ({ children }) => {
  const [auth, dispatch] = usePersistedReducer(reducer, initialState);
  return (
    <authContext.Provider value={auth}>
      <authContextDispatch.Provider value={dispatch}>{children}</authContextDispatch.Provider>
    </authContext.Provider>
  );
};
const useAuthState = () => {
  return React.useContext(authContext);
};
const useAuthDispatch = () => {
  return React.useContext(authContextDispatch);
};
const useAuthActions = () => {
  const authDispatch = useAuthDispatch();
  const authState = useAuthState();
  const checkAuthTimeOut = React.useCallback(
    (exp) => {
      setTimeout(() => {
        authDispatch({ type: "logout" });
      }, exp * 1000);
    },
    [authDispatch]
  );
  const authCheck = React.useCallback(() => {
    try {
      const token = authState.token;
      if (token) {
        const expir = authState.expire;
        if (expir < new Date()) {
          authDispatch({ type: "logout" });
        } else {
          authDispatch({
            type: "success",
            payload: { token: token, expire: authState.expire },
          });
          const exp = (new Date(expir).getTime() - new Date().getTime()) / 1000;
          checkAuthTimeOut(exp);
        }
      } else {
        authDispatch({ type: "logout" });
      }
    } catch (e) {
      authDispatch({ type: "error" });
    }
  }, [authDispatch, authState.expire, authState.token, checkAuthTimeOut]);
  const auth = async (email, password, isSignIn) => {
    authDispatch({ type: "load" });
    let url = null;
    if (isSignIn) url = "accounts:signInWithPassword?key=AIzaSyCbdDOVj3453l2QaShTZUT7NhRE_RXu6EI";
    else url = "accounts:signUp?key=AIzaSyCbdDOVj3453l2QaShTZUT7NhRE_RXu6EI";
    try {
      const { data } = await axiosIns.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      });
      let expiration = new Date(new Date().getTime() + parseInt(data.expiresIn * 1000));
      let token = data.idToken;
      authDispatch({
        type: "success",
        payload: { token: token, expire: expiration },
      });
      checkAuthTimeOut(data.expiresIn);
    } catch (e) {
      authDispatch({ type: "fail" });
    }
  };
  return { auth, authCheck };
};

export { useAuthState, useAuthActions, useAuthDispatch };
export default AuthProvider;
