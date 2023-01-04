import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import IdeView from "../views/ide"

export default function IndexPage() {
    return (
        <Layout>
            <IdeView />
        </Layout>
    )
}
export const Head: HeadFC = () => <title>cpy toolbox</title>
