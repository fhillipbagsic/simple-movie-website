import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Discover from "./pages/Discover";
const MovieDetails = lazy(() => import("./pages/MovieDetails"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/discover/movies" />
          </Route>
          <Route path="/discover/:media" component={Discover} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="">
            <h1>Error</h1>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
