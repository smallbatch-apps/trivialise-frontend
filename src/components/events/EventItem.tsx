import { FC } from "react";

import { Event } from '../../utilities/types';
import { formatDate, formatEventTime } from '../../utilities/utils';

type Props = {
  event: Event;
};

const statuses = [
  '', 'Draft', 'Published', 'Completed'
];

const EventItem: FC<Props> = ({event}) => {
  return <div className="flex justify-between">
    <div>
      {formatEventTime(event)} - {formatDate(event.endTime)}
    </div>
    <div>{statuses[event.status]}</div>
  </div>
}

export default EventItem;
