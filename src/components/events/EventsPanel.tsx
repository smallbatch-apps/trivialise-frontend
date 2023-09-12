import { FC } from "react";
import { useQuery } from "react-query";
import { eventsQuery, seriesQuery } from "../../utilities/queries";

import SeriesList from "./SeriesList";

const EventsPanel: FC = () => {
  const { data: events = [] } = useQuery("events", eventsQuery, { keepPreviousData: true });
  const { data: series = [] } = useQuery("series", seriesQuery, { keepPreviousData: true });

  return (
    <>
        <h1 className="font-oswald text-blue-400 text-4xl m-5 my-6">Manage Events</h1>

        <SeriesList series={series} events={events} />
    </>

  );
};

export default EventsPanel;