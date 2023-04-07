import * as React from "react";
import { Question } from "../../logic/buildGuide/questions";
type Props = {
  question: Question;
  onChange: (value: string) => void;
};
export default function QuestionInput({ question, onChange }: Props) {
  if (Array.isArray(question.prompt)) {
    return (
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">{question.question}</span>
        </label>
        <select
          className="select select-bordered"
          onChange={(e) => onChange(e.target.value)}
        >
          <option disabled selected>
            Pick one
          </option>
          {question.prompt.map((usableOption) => (
            <option>{usableOption}</option>
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
