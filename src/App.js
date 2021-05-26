import Header from "./components/Header/Header";
import Categories from "./pages/Categories/Categories";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";
import {useAuthState,useAuthActions} from "./Context/Auth/authProvider"
import {useEffect,useRef} from "react";
const queryClient = new QueryClient();
const App = () => {
  const {token} = useAuthState();
  const {authCheck} = useAuthActions();
  const isAuthChecked = useRef(false)
  useEffect(() => {
    if (!isAuthChecked.current){
      authCheck()
    }
    isAuthChecked.current = true;
  }, [authCheck])
  return (
    <>
        <Header />
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <Switch>
            {!token && <Route exact path="/auth/Login">
              <Login />
            </Route>}
            <Route exact path="/:category">
              <Categories />
            </Route>
            <Route exact path="/movie/:id">
              <MovieDetails />
            </Route>
            <Redirect to="/popular"></Redirect>
          </Switch>
        </QueryClientProvider>
    </>
  );
};
export default App;
