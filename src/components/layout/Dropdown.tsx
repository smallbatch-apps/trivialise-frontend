import { FC, useContext, } from "react";
import { Menu } from '@headlessui/react';
import { Link } from "react-router-dom";
import Icon from './Icon';

import { loginService } from "../../services/LoginService";
import { LoginContext } from "../../utilities/reducers";


{/* <Icon icon="user" secondaryColour="orange" className="fa-2x absolute" />
        <div className="border p-10 absolute top-3">
          

        </div> */}
const Dropdown: FC = () => {
  const {
    state: { loggedIn },
  } = useContext(LoginContext);

  return (
    <Menu>
      <Menu.Button>
        <Icon icon="user" secondaryColour="orange" className="fa-2x absolute" />
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <div className="absolute w-60 top-14 p-3 border bg-white z-20 -right-10 rounded">
              <div
                className="w-full mb-3"
              >
                You Are Logged In
              </div>
              {!loggedIn && <a href="/login" className="text-white block text-center bg-blue-600 py-2 px-3 cursor-pointer hover:bg-blue-700">
              <Icon icon="user" secondaryColour="orange" className="fa-xl mr-2" />
              Log In
              </a>}
              {loggedIn && <div className="text-white text-center bg-blue-600 py-2 px-3 cursor-pointer hover:bg-blue-700" onClick={() => {
                loginService.logOut();
                window.location.href = "/";
              }}>
              <Icon icon="user" secondaryColour="orange" className="fa-xl mr-2" />
              Log Out
              </div>}

            </div>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default Dropdown;