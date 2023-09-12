import { FC } from "react";

import BlueBoxSmall from "../layout/BlueBoxSmall";
import HeroImage from "../../images/heroes/planning.jpg";

import EventsPanel from "../events/EventsPanel";


const Events: FC = () => {
  return (
    <>
      <BlueBoxSmall hero={HeroImage}>
        <h2 className="text-6xl font-oswald">Manage Your Events</h2>
        <p className="text-2xl mt-6 text-blue-100">Run several different series of contests, and manage their dates</p>
      </BlueBoxSmall>

      <div className="container mx-auto">
        <EventsPanel />
      </div>
    </>
  );
};

export default Events;
