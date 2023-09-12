import { FC } from "react";
import { Series } from '../../utilities/types'

type Props = {
  series: Series;
};

const SeriesItem: FC<Props> = ({series}) => {
  return <div className="p-3 bg-blue-400">
    <div className="text-blue-100 text-xl font-semibold">{series.name}</div>
    <div className="text-blue-200">{series.description}</div>
  </div> 
}

export default SeriesItem;
