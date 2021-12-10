import axios from "axios";

import BaseService from "./BaseService";

axios.defaults.baseURL = process.env.REACT_APP_API_HOST;

export default class AnswerService extends BaseService {
  entity = "answers";

  async reorderAnswers(questionId: string, answers: string[]) {
    const headers = this.getHeaders();
    await axios.patch(`questions/${questionId}/answers`, { answers }, { headers });
  }
}

export const answerService = new AnswerService();
