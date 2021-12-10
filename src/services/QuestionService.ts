import BaseService from "./BaseService";

export default class QuestionService extends BaseService {
  entity = "questions";
}

export const questionService = new QuestionService();
