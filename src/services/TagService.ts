import BaseService from "./BaseService";

export default class TagService extends BaseService {
  entity = "tags";
}

export const tagService = new TagService();
