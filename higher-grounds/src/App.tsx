import * as React from "react";
import "./App.css";
import { HomeScreen } from "./components/screens/home-screen";
import { Story } from "./components/screens/story";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/home" component={HomeScreen} history={History} />
            <Route path="/story" component={Story} history={History} />
            <Redirect to="/home" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
