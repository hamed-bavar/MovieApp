import Header from "./components/Header/Header";
import Categories from "./pages/Categories/Categories";
import MovieDetails from "./pages/MovieDetails/MovieDetails"
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Switch, Redirect } from "react-router-dom";
const queryClient = new QueryClient();
const App = () => {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Switch>
          <Route exact path="/:category">
            <Categories />
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetails/>
          </Route>
          <Redirect to="/popular"></Redirect>
        </Switch>
      </QueryClientProvider>
    </>
  );
};
export default App;
