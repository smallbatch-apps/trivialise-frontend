import { FC } from 'react';

import { Event } from '../../utilities/types';

import EventItem from './EventItem';

type Props = {
  events: Event[]|undefined;
};

const ListEvents: FC<Props> = ({events}) => {
  if(!events) return <div></div>;
  return <div>
    {events.map(event =>  <EventItem event={event} key={event.id} />)}
  </div>
}

export default ListEvents;