import React, { useEffect } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
export enum FileType {
  json = "json",
  python = "py",
  markdown = "md",
}
type Props = {
  value: string;
  fileType: FileType;
  onChange: (newValue: string) => void;
};
const SimpleEditor = (props: Props) => {
  const returnPlaceHolder = () => {
    switch (props.fileType) {
      case FileType.json:
        return "JavaScript Object Notation";
      case FileType.python:
        return "Monty Python";
      case FileType.markdown:
        return "Peanuts-style formatting";
    }
  };
  return (
    <div className="h80 overflow-y-scroll	   ">
      <CodeEditor
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
        value={props.value}
        language={props.fileType}
        placeholder={returnPlaceHolder()}
        onChange={(evn: any) => props.onChange(evn.target.value)}
        padding={15}
        style={{
          fontSize: 12,
          backgroundColor: "#f5f5f5",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </div>
  );
};

export default SimpleEditor;
