import { Suspense, lazy } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

const Home = lazy(() => import("../components/Home"));
const Contracts = lazy(() => import("../components/Contracts"));
const NotFound = lazy(() => import("../components/NotFound"));

const AppRouter = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/contracts" component={Contracts} />
        <Route
          path="*"
          component={NotFound}
          render={() => <Redirect to="/notfound" />}
        />
      </Switch>
    </Suspense>
  );
};

export default AppRouter;
