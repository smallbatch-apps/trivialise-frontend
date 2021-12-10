import { FC } from "react";

import BlueBoxSmall from "../layout/BlueBoxSmall";
import QuestionsPanel from "../questions/QuestionsPanel";
import QuestionsHero from "../../images/heroes/questions.jpg";

const Questions: FC = () => {
  return (
    <>
      <BlueBoxSmall hero={QuestionsHero}>
        <h2 className="text-6xl font-oswald">Manage Your Questions</h2>
        <p className="text-2xl mt-6 text-blue-100">Add your questions and answers, tag them to make them easier to find later.</p>
      </BlueBoxSmall>

      <div className="container mx-auto">
        <QuestionsPanel />
      </div>
    </>
  );
};

export default Questions;
