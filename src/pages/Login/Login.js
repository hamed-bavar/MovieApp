import { useState, useEffect } from "react";
import authLogo from "../../assets/icons/authLogo/icons8-lock-52 (1).png";
import Spinner from "../../components/UI/Spinner/Spinner";
import {
  useAuthActions,
  useAuthState,
  useAuthDispatch,
} from "../../Context/Auth/authProvider";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const { auth } = useAuthActions();
  const { error, loading, token } = useAuthState();
  const dispathAuth = useAuthDispatch();
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const doAuth = (e) => {
    e.preventDefault();
    console.log("form handler")
    auth(email, password, !signUp);
  };
  useEffect(() => {
    if (token) history.goBack();
  }, [token, history]);
  const cleanErr = () => {
    dispathAuth({ type: "logout" });
    setEmail("");
    setPassword("");
    history.push("/auth/Login");
  };
  return (
    <form
      className="bg-gray-dark w-full min-h-screen flex justify-center items-center"
      onSubmit={doAuth}
      autoComplete="on"
    >
      {error && (
        <p className="cursor-pointer" onClick={() => cleanErr()}>
          {" "}
          {signUp
            ? "!ERROR... TRY AGAIN(use Stronger password or another Email"
            : "!ERROR... TRY AGAIN(change email or password)"}
        </p>
      )}
      {loading && <Spinner />}
      {!error && !loading && (
        <div className="w-[320px] sm:w-[450px] h-96 flex flex-col justify-items-start items-center p-6 relative bottom-10 mt-8">
          <div className="bg-pink-600 rounded-full transform scale-50 p-2">
            <img
              src={authLogo}
              alt="authLogo"
              className="transform scale-75"
            ></img>
          </div>
          <p className="-mt-4 mb-4 italic text-lg text-gray-light">
            {!signUp ? "Login" : "SignUp"}
          </p>
          <input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            className="p-2 w-10/12 bg-gray-dark border-[1px] border-white mb-6 rounded-sm"
            placeholder="Email Address"
          ></input>
          <input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            className="p-2 w-10/12 bg-gray-dark border-[1px] border-white mb-6 rounded-sm"
            placeholder="Password"
          ></input>
          <button
            type="submit"
            className="p-2 w-10/12 bg-blue-500 hover:bg-blue-600 h-10 mb-4"
          >
            {!signUp ? "Login" : "SignUp"}
          </button>
          <p
            onClick={() => setSignUp((prev) => !prev)}
            className="text-blue-400 cursor-pointer hover:border-b-[1px] mb-4"
          >
            switch to {!signUp ? "signup" : "login"}{" "}
          </p>
          <p>Copyright &copy;2021-hamedBavar</p>
        </div>
      )}
    </form>
  );
};

export default Login;
