import axios from "axios";

import BaseService from "./BaseService";

export default class SeriesService extends BaseService {
  entity = "series";
}

export const seriesService = new SeriesService();
