import { FC, useContext } from "react";
import { LoginContext } from "../../utilities/reducers";
import Guest from "./Guest";
import User from "./User";

const Home: FC = () => {
  const { state } = useContext(LoginContext);

  if (!state.loggedIn) {
    return <Guest />;
  }
  return <User />;
};

export default Home;
