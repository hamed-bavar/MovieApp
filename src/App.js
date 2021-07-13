import Header from "./components/Header/Header";
import Categories from "./pages/Categories/Categories";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";
import { useAuthState, useAuthActions } from "./Context/Auth/authProvider";
import { useWatchListActions } from "./Context/watchList/watchListProvider";
import { useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import WatchList from "./pages/WatchList/WatchList";
const queryClient = new QueryClient();
const App = () => {
  const { token } = useAuthState();
  const { authCheck } = useAuthActions();
  const isWatchListChecked = useRef(false);
  const history = useHistory();
  const location = useLocation();
  const { setWatchListFromStorage } = useWatchListActions();
  useEffect(() => {
    authCheck();
  }, [authCheck]);
  useEffect(() => {
    if (token) {
      if (!isWatchListChecked.current) {
        setWatchListFromStorage();
      }
      isWatchListChecked.current = true;
    }
  }, [token, setWatchListFromStorage]);
  useEffect(() => {
    if (location.pathname === "/") history.push("/see/popular");
  }, [location, history, token]);
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Switch>
            <Route exact path="/auth/Login">
              <Login />
            </Route>
          {token && (
            <Route exact path="/auth/watchList">
              <WatchList />
            </Route>
          )}
          <Route exact path="/see/:category">
            <Categories />
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetails />
          </Route>
          <Redirect to="/see/popular"></Redirect>
        </Switch>
      </QueryClientProvider>
    </>
  );
};
export default App;
