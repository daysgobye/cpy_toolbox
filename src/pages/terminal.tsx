import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import TerminalView from "../views/terminal"

export default function IndexPage() {

  return (
    <Layout>

      <TerminalView />
    </Layout>
  )
}


export const Head: HeadFC = () => <title>cpy toolbox</title>
