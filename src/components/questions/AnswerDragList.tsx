import { FC, useState } from "react";

import AnswerRow from "./AnswerRow";

import { Answer } from "../../utilities/types";

type Props = {
  answers: Answer[];
};

const AnswerDragList: FC<Props> = ({ answers }) => {
  const [currentAnswerId, setCurrentAnswerId] = useState(null);
  return (
    <>
      {answers?.map((answer, index) => (
        <AnswerRow key={answer.id} answer={answer} currentAnswerId={currentAnswerId} setCurrentAnswerId={setCurrentAnswerId} index={index} />
      ))}
    </>
  );
};

export default AnswerDragList;
