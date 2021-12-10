import { useReducer } from "react";
import { Switch, Route } from "react-router-dom";
import { loginReducer, LoginContext } from "./utilities/reducers";
import LoginService from "./services/LoginService";
import "./index.css";

import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import LogIn from "./components/pages/LogIn";
import Questions from "./components/pages/Questions";

import NavBar from "./components/layout/Navbar";

function App() {
  const [state, dispatch] = useReducer(loginReducer, LoginService.getLoggedInUser());
  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      <div className="bg-gray-900 p-2 px-6 text-gray-400">
        <NavBar />
      </div>
      <div className="flex-grow font-light">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
        </Switch>
      </div>
      <div className="bg-gray-800 p-3"></div>
    </LoginContext.Provider>
  );
}

export default App;
