import { FC, useContext, } from "react";
import { LoginContext } from "../../utilities/reducers";
import { NavLink } from "react-router-dom";

import AccountPanel from '../layout/AccountPanel';

const Navbar: FC = () => {
  // const { pathname } = useLocation();
  const {
    state: { loggedIn },
  } = useContext(LoginContext);
  // className="font-medium py-1 my-3 border-b-4 border-gray-900 mr-6"
  const inactiveClassName = "font-medium py-1 my-3 border-b-4 border-gray-900 mr-6";
  const activeClassName = `${inactiveClassName} text-white border-blue-500`;

  return (
    <div className="flex justify-between">
      <div className="flex">
        <NavLink
          to="/"
          className="font-medium py-1 my-3 border-b-4 border-gray-900 mr-6"
        >
          Home
        </NavLink>

        {!loggedIn && (
          <>
            <NavLink to="/signup"
              className="font-medium py-1 my-3 border-b-4 border-gray-900 mr-6">
              Sign Up
            </NavLink>
            <NavLink to="/login"
              className="font-medium py-1 my-3 border-b-4 border-gray-900 mr-6">
              Log In
            </NavLink>
          </>
        )
        }

        {
          loggedIn && (
            <>
              <NavLink
                to="/questions"
                className={({ isActive }) => isActive ? activeClassName : inactiveClassName }
              >
                Manage Questions
              </NavLink>
              <NavLink
                to="/events"
                className={({ isActive }) => isActive ? activeClassName : inactiveClassName }
              >
                Manage Series and Events
              </NavLink>
            </>
          )
        }
      </div>
      <div className="flex">
        <AccountPanel />
      </div >
    </div>
  );
};

export default Navbar;
