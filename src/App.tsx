import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import { loginReducer, LoginContext } from "./utilities/reducers";
import LoginService from "./services/LoginService";
import "./index.css";

import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import LogIn from "./components/pages/LogIn";
import Questions from "./components/pages/Questions";
import Events from "./components/pages/Events";

import NavBar from "./components/layout/Navbar";

function App() {
  const [state, dispatch] = useReducer(loginReducer, LoginService.getLoggedInUser());
  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      <div className="bg-gray-900 p-2 px-6 text-gray-400">
        <NavBar />
      </div>
      <div className="flex-grow font-light">
        <Routes>
          <Route index element={ <Home />} />
          <Route path="/signup" element={ <SignUp />} />
          <Route path="/login" element={ <LogIn />} />
          <Route path="/questions" element={ <Questions />} />
          <Route path="/events" element={ <Events />} />
        </Routes>
      </div>
      <div className="bg-gray-800 p-3"></div>
    </LoginContext.Provider>
  );
}

export default App;
