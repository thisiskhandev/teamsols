import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";

const UrlLinks = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </>
  );
};

export default UrlLinks;
