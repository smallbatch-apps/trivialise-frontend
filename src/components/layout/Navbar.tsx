import { FC, useContext } from "react";
import { LoginContext } from "../../utilities/reducers";
import { NavLink, useLocation } from "react-router-dom";

const Navbar: FC = () => {
  const { pathname } = useLocation();
  const {
    state: { loggedIn },
  } = useContext(LoginContext);

  return (
    <div className="flex">
      <NavLink
        to="/"
        className="font-medium py-1 my-3 border-b-4 border-gray-900 mr-6"
        activeClassName="text-white border-blue-500"
        isActive={() => pathname === "/"}
      >
        Home
      </NavLink>

      {!loggedIn && (
        <>
          <NavLink to="/signup" className="font-medium py-1 my-3 border-b-4 border-gray-900 mr-6" activeClassName="text-white border-blue-500">
            Sign Up
          </NavLink>
          <NavLink to="/login" className="font-medium py-1 my-3 border-b-4 border-gray-900 mr-6" activeClassName="text-white border-blue-500">
            Log In
          </NavLink>
        </>
      )}

      {loggedIn && (
        <>
          <NavLink to="/questions" className="font-medium py-1 my-3 border-b-4 border-gray-900 mr-6" activeClassName="text-white border-blue-500">
            Manage Questions
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;
