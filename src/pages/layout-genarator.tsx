import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import QmkLayoutView from "../views/qmkLayout";
import Button from "../components/button";
import { LayoutJson } from "../logic/layout/types";
import EditLayoutView from "../views/editLayout";
export enum Views {
  default,
  manual,
  qmk,
  kmk,
  edit,
}
export type ViewProps = {
  setCurrentView: (view: Views) => void;
};
export interface SettingViewProps extends ViewProps {
  setBaseLayout: (baseLayout: LayoutJson) => void;
}
const DefaultView = ({ setCurrentView }: ViewProps) => {
  return (
    <div className="flex flex-col">
      Welcome to layout.json builder
      <div className="flex">
        <Button onClick={() => setCurrentView(Views.qmk)}>
          From Qmk Board
        </Button>
        <Button onClick={() => setCurrentView(Views.kmk)}>
          From kmk Board
        </Button>
        <Button onClick={() => setCurrentView(Views.manual)}>From Fresh</Button>
      </div>
    </div>
  );
};
export default function IndexPage() {
  const [currentView, setCurrentView] = React.useState<Views>(Views.default),
    [baseLayout, setBaseLayout] = React.useState<LayoutJson>();

  const returnView = () => {
    switch (currentView) {
      case Views.qmk:
        return (
          <QmkLayoutView
            setCurrentView={setCurrentView}
            setBaseLayout={setBaseLayout}
          />
        );
      case Views.edit:
        if (baseLayout == undefined) {
          return <DefaultView setCurrentView={setCurrentView} />;
        }
        return (
          <EditLayoutView
            setBaseLayout={setBaseLayout}
            baseLayout={baseLayout}
          />
        );
      default:
        return <DefaultView setCurrentView={setCurrentView} />;
    }
  };
  return (
    <Layout>
      <div className="min-h-full flex flex-1 h-full">{returnView()}</div>
    </Layout>
  );
}
export const Head: HeadFC = () => <title>cpy toolbox</title>;
