import { FC, useState } from "react";
import { useQuery } from "react-query";
import { questionsQuery, tagsQuery } from "../../utilities/queries";

import NewQuestionForm from "./NewQuestionForm";
import QuestionList from "./QuestionList";
import QuestionDetail from "./QuestionDetail";

const QuestionsPanel: FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const { data: questions } = useQuery("questions", questionsQuery, { keepPreviousData: true, initialData: [] });
  const { data: tags } = useQuery("tags", tagsQuery, { keepPreviousData: true, initialData: [] });

  if (!questions || !tags) return <></>;

  // if (!activeQuestion) setActiveQuestion(questions[0].id);

  const question = questions.find(({ id }) => id === activeQuestion) ?? null;

  return (
    <div className="flex">
      <div className="flex-1">
        <QuestionList tags={tags} questions={questions} activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion} />
        <NewQuestionForm tags={tags} />
      </div>
      <div className="flex-1">
        <QuestionDetail question={question} tags={tags} />
      </div>
    </div>
  );
};

export default QuestionsPanel;
