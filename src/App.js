import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
