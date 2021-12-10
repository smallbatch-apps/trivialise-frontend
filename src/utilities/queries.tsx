import { QueryClient } from "react-query";

import { questionService } from "../services/QuestionService";
import { tagService } from "../services/TagService";
import { Question, Tag } from "./types";

export const queryClient = new QueryClient();

export const questionsQuery = async (): Promise<Question[]> => {
  const { data } = await questionService.getAll();
  return data;
};

export const tagsQuery = async (): Promise<Tag[]> => {
  const { data } = await tagService.getAll();
  return data;
};
