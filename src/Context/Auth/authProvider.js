import React from "react";
import { axiosIns } from "../../index";
const authContext = React.createContext();
const authContextSet = React.createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState({
    token: null,
    loading: null,
    error: null,
  });
  return (
    <authContext.Provider value={auth}>
      <authContextSet.Provider value={setAuth}>
        {children}
      </authContextSet.Provider>
    </authContext.Provider>
  );
};

const useAuthState = () => {
  return React.useContext(authContext);
};
const useAuthSetState = () => {
  return React.useContext(authContextSet);
};

const useAuthActions = () => {
  const setAuthState = useAuthSetState();
  const authState = useAuthState();

  const setLoading = () => {
    setAuthState({ ...authState, error: null, loading: true });
  };
  const setSuccess = (token) => {
    setAuthState({ ...authState, error: null, loading: null, token: token });
  };
  const setFail = () => {
    setAuthState({ ...authState, error: true, loading: null, token: null });
  };
  const setLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    setAuthState({ ...authState, error: null, loading: null, token: null });
  };
  const reset = () => {
    setAuthState({ ...authState, error: null, loading: null, token: null });
  };
  const checkAuthTimeOut = (exp) => {
    setTimeout(setLogOut, exp * 1000);
  };
  const authCheck = () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setLogOut();
        return;
      }
      const expir = localStorage.getItem("expiration");
      if (expir < new Date()) {
        setLogOut();
      } else {
        setSuccess(token);
        const exp = (new Date(expir).getTime() - new Date().getTime()) / 1000;
        checkAuthTimeOut(exp);
      }
    } catch (e) {}
  };
  const auth = async (email, password, isSignIn) => {
    setLoading();
    let url = null;
    if (isSignIn)
      url =
        "accounts:signInWithPassword?key=AIzaSyCbdDOVj3453l2QaShTZUT7NhRE_RXu6EI";
    else url = "accounts:signUp?key=AIzaSyCbdDOVj3453l2QaShTZUT7NhRE_RXu6EI";
    try {
      const response = await axiosIns.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      });
      setSuccess(response.data.idToken);
      let expiration = new Date(
        new Date().getTime() + parseInt(response.data.expiresIn * 1000)
      );
      checkAuthTimeOut(response.data.expiresIn);
      localStorage.setItem("token", response.data.idToken);
      localStorage.setItem("expiration", expiration);
    } catch (e) {
      setFail();
    }
  };
  return { setLoading, setSuccess, setFail, setLogOut, auth, authCheck, reset };
};

export { useAuthSetState, useAuthState, useAuthActions };
export default AuthProvider;
