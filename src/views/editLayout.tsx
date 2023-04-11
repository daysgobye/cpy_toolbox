import * as React from "react";
//@ts-ignore
import { JsonEditor } from "react-jsondata-editor";

import { LayoutJson } from "../logic/layout/types";
import SimpleEditor, { FileType } from "../components/editor/simple";
type Props = {
  baseLayout: LayoutJson;
  setBaseLayout: (baseLayout: LayoutJson) => void;
};
export default function EditLayoutView({ setBaseLayout, baseLayout }: Props) {
  return (
    <div className="grid gap-4 grid-cols-6 p-4 pb-20">
      <div className="flex flex-col col-span-full">
        <h2>Edit Layout.json</h2>
        <p>
          None of our converters are perfect. They all make best guesses and its
          up to you to edit it but hopefully this saved you some time. Below you
          can edit your fields and end up with a working file.
        </p>
      </div>

      <div className="col-span-3">
        <JsonEditor
          jsonObject={JSON.stringify(baseLayout)}
          onChange={(output: string) => {
            setBaseLayout(JSON.parse(output));
          }}
        />
      </div>
      <div className="col-span-3">
        <SimpleEditor
          value={JSON.stringify(baseLayout, null, 2)}
          fileType={FileType.json}
          onChange={(output: string) => {
            setBaseLayout(JSON.parse(output));
          }}
        />
      </div>
    </div>
  );
}
