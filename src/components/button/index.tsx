import * as React from "react";
import { Question } from "../../logic/buildGuide/questions";
type Props = {
  className?: string;
  onClick: () => void;
  children: any;
};
export default function Button({ className, children, onClick }: Props) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
