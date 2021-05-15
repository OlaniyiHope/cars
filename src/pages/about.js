import React from "react"
import { AppliedLayout } from "../components/layout"

import { PageContainer, Content } from "../components/static"
import { about } from "../assets/data"

const About = props => {
  const title = "About"
  return (
    <AppliedLayout {...props}>
      <PageContainer
        title={title}
        header="These about are signed to protect our mutual interests as we serve you."
        text=""
      >
        <Content data={about} contact/>
      </PageContainer>
    </AppliedLayout>
  )
}
About.propTypes = {}
export default About
