import Header from "./components/Header/Header";
import Categories from "./pages/Categories/Categories";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";
import { useAuthState, useAuthActions } from "./Context/Auth/authProvider";
import { useWatchListActions } from "./Context/watchList/watchListProvider";
import { useEffect, useRef } from "react";
import WatchList from "./pages/WatchList/WatchList";
const queryClient = new QueryClient();
const App = () => {
  const { token } = useAuthState();
  const { authCheck } = useAuthActions();
  const isAuthChecked = useRef(false);
  const isWatchListChecked = useRef(false);
  const { setWatchListFromStorage } = useWatchListActions();
  useEffect(() => {
    if (!isAuthChecked.current) {
      authCheck();
    }
    isAuthChecked.current = true;
  }, [authCheck]);
  useEffect(() => {
    if (token){
      if(!isWatchListChecked.current) {
        setWatchListFromStorage();
      }
      isWatchListChecked.current = true;
  }
  }, [token, setWatchListFromStorage]);
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Switch>
          {!token && (
            <Route exact path="/auth/Login">
              <Login />
            </Route>
          )}
          {token && (
            <Route exact path="/auth/watchList">
              <WatchList />
            </Route>
          )}
          <Route exact path="/:category">
            <Categories />
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetails />
          </Route>
          {((!token && isWatchListChecked.current) || token) && <Redirect to="/popular"></Redirect>}
        </Switch>
      </QueryClientProvider>
    </>
  );
};
export default App;
