import * as React from "react";
import { Question } from "../../logic/buildGuide/questions";
type Props = {
  question: Question;
  onChange: (value: string) => void;
  next: () => void;
};
export default function QuestionInput({ question, onChange, next }: Props) {
  if (Array.isArray(question.prompt)) {
    return (
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">{question.question}</span>
        </label>
        <select
          value={question.answer}
          className="select select-bordered"
          onChange={(e) => onChange(e.target.value)}
        >
          <option disabled selected defaultChecked>
            Pick one
          </option>
          {question.prompt.map((usableOption) => (
            <option key={usableOption}>{usableOption}</option>
          ))}
        </select>
      </div>
    );
  } else {
    return (
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">{question.question}</span>
        </label>
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              next();
            }
          }}
          type="text"
          placeholder={question.prompt}
          value={question.answer}
          onChange={(e) => onChange(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    );
  }
}
