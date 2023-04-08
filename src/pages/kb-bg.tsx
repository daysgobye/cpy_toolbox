import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import {
  QuestionBlock,
  YesNo,
  allQuestions,
} from "../logic/buildGuide/questions";
import Button from "../components/button";
import QuestionInput from "../components/kb-bg/question";
import ReactMarkdown from "react-markdown";
import { returnGuide } from "../logic/buildGuide/buildguideMd";
import remarkGfm from "remark-gfm";

export default function IndexPage() {
  const questionKeys = Object.keys(allQuestions);
  const [questions, setQuestions] = React.useState<QuestionBlock>({
      ...allQuestions,
    }),
    [pos, setPos] = React.useState(0),
    [displayMd, setDisplayMd] = React.useState(true),
    [haveBeenSet, setHaveBeenSet] = React.useState<string[]>([]);

  const questionChange = (value: string) => {
    let tempQuestions = { ...questions };
    tempQuestions[questionKeys[pos]].answer = value;
    setQuestions(tempQuestions);
    const tempBeenSet = new Set([...haveBeenSet]);
    tempBeenSet.add(questionKeys[pos]);
    setHaveBeenSet([...tempBeenSet]);
  };

  const returnNextQuestion = () => {
    let tempPos = parseInt(`${pos}`);
    if (!questions[questionKeys[tempPos]].condition(questions)) {
      while (!questions[questionKeys[tempPos]].condition(questions)) {
        tempPos++;
      }
      setPos(tempPos);
    }
    return questions[questionKeys[tempPos]];
  };

  const renderQuestion = (): React.ReactNode => {
    const tempQuestion = returnNextQuestion();
    return (
      <QuestionInput
        question={tempQuestion}
        onChange={questionChange}
        next={increasePos}
      />
    );
  };

  const increasePos = () => {
    if (pos < questionKeys.length) {
      if (!haveBeenSet.includes(questionKeys[pos])) {
        const unsetQuestion = questions[questionKeys[pos]];
        if (Array.isArray(unsetQuestion.prompt)) {
          questionChange(unsetQuestion.prompt[0]);
        } else {
          questionChange(unsetQuestion.answer);
        }
      }
      setPos(pos + 1);
    }
  };

  const decreasePos = () => {
    if (pos > 0) {
      setPos(pos - 1);
    }
  };
  const returnMd = () => {
    let answers: Record<string, string | boolean> = {};
    questionKeys.forEach((key) => {
      if (key === "OLED" || key === "ENCODERS" || key === "LED") {
        answers[key] = questions[key].answer === YesNo.yes;
      } else {
        answers[key] = questions[key].answer;
      }
    });
    //@ts-ignore
    return returnGuide(answers);
  };
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex-col">
        <p>
          on question {pos} of {questionKeys.length} ish questions
        </p>
        <div className="card overflow-auto max-h-96 shadow-xl">
          <div className="card-body flex-col">
            <h2 className="card-title">Your answers</h2>

            {Object.entries(questions)
              .filter((question) => haveBeenSet.includes(question[0]))
              .map((question, index) => (
                <p>
                  {index}){question[1].question}:{question[1].answer}
                </p>
              ))}
          </div>
        </div>

        {renderQuestion()}
        <div className="flex space-x-4">
          <Button onClick={decreasePos}>back</Button>
          <Button onClick={increasePos}>Next</Button>
        </div>
      </div>
      <div className="mockup-window border bg-base-300 shadow-xl ">
        <div className="overflow-auto max-h-[80vh]">
          <div className="p-5">
            {displayMd ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {returnMd()}
              </ReactMarkdown>
            ) : (
              <>
                <p>copy away</p>
                <textarea disabled className="textarea h-[80vw] w-full">
                  {returnMd()}
                </textarea>
              </>
            )}
          </div>
        </div>{" "}
        <Button onClick={() => setDisplayMd(!displayMd)}>
          {displayMd ? "raw text" : "Mark down"}
        </Button>
      </div>
    </div>
  );
}
export const Head: HeadFC = () => <title>cpy toolbox</title>;
