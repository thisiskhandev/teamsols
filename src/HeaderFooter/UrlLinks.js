import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";

const UrlLinks = () => {
  return (
    <>
      <Switch>
        <Route exact path="/teamsols" component={Home} />
        <Route path="/about" component={About} />
        <Redirect to="/teamsols" />
      </Switch>
    </>
  );
};

export default UrlLinks;
