import * as React from "react";
import { SettingViewProps, Views } from "../pages/layout-genarator";
import Button from "../components/button";
import { fromQmk } from "../logic/layout/fromQmk";
import SimpleEditor, { FileType } from "../components/editor/simple";

export default function QmkLayoutView({
  setCurrentView,
  setBaseLayout,
}: SettingViewProps) {
  const [infoJson, setInfoJson] = React.useState("");
  const submit = () => {
    const layout = fromQmk(infoJson);
    setBaseLayout(layout);
    setCurrentView(Views.edit);
  };
  return (
    <div className=" flex flex-1 h-full flex-col bg-yellow ">
      <h2>Qmk converter</h2>
      <p>
        The qmk converter only supports single file info.json at this time. If
        the board your working with has multiple info.json you will have to
        combine them into a single file.
      </p>
      <div className="h-[500px]">
        <label className="label">
          <span className="label-text">Qmk info.json</span>
        </label>
        <SimpleEditor
          value={infoJson}
          onChange={(value) => setInfoJson(value)}
          fileType={FileType.json}
        />

        <Button onClick={submit}>Submit</Button>
      </div>
    </div>
  );
}
