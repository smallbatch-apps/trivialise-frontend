import BaseService from "./BaseService";

export default class EventService extends BaseService {
  entity = "events";
}

export const eventService = new EventService();
