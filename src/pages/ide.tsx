import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import IdeView from "../views/ide"
import { AppManager } from "../logic/appManager"
const appManager = AppManager.getInstance()
export default function IndexPage() {
    return (
        <Layout>
            <IdeView />
        </Layout>
    )
}
export const Head: HeadFC = () => <title>cpy toolbox</title>
