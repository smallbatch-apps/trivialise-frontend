import { FC, useState } from "react";

import Icon from "../layout/Icon";

import { Question } from "../../utilities/types";
import { queryClient } from "../../utilities/queries";
import { questionService } from "../../services";

type Props = {
  question: Question;
};

const QuestionDelete: FC<Props> = ({ question }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div className="text-right">
      {!showConfirm && (
        <button className="text-gray-600" onClick={() => setShowConfirm(true)}>
          <Icon icon="trash" type="fad" className="" />
        </button>
      )}
      {showConfirm && (
        <>
          <span onClick={() => setShowConfirm(false)} className="text-gray-600 mr-5">
            <Icon icon="times" type="far" />
          </span>

          <button
            className="text-gray-600"
            onClick={() => {
              questionService.delete(question.id).then(() => {
                queryClient.invalidateQueries("questions");
                setShowConfirm(false);
              });
            }}
          >
            Confirm deletion <Icon icon="trash" type="fad" className="ml-2" />
          </button>
        </>
      )}
    </div>
  );
};

export default QuestionDelete;
