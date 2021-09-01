import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "components/Header/Header";
import Home from "containers/client/Home/Home";
import Theater from "containers/client/Theater/Theater";
import About from "containers/client/About/About";
import Review from "containers/client/Review/Review";
import MovieDetailCl from "containers/client/MovieDetailCl/MovieDetailCl";
import PageNotFound from "containers/shared/PageNotFound/PageNotFound";
import DemoHook from "containers/client/DemoHook/DemoHook";
// import Button from "components/Button/Button";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/theater" component={Theater} />
          <Route path="/review" component={Review} />
          <Route path="/about" component={About} />
          <Route path="/hook" component={DemoHook} />
          <Route path="/movie-detail/:movieId" component={MovieDetailCl} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
