import { FC } from "react";

import Dropdown from './Dropdown';

const AccountPanel: FC = () => {
  return (
    <div className="font-medium py-1 border-b-4 border-gray-900 mr-6">
      <div className="relative">
      <Dropdown />
      </div>
    </div>
  );
};

export default AccountPanel;
