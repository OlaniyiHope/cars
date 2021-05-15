import React from "react"
import { AppliedLayout } from "components/layout"
import Home from "../components/home"


const IndexPage = props => {
  return (
    <AppliedLayout {...props} topOffset={500} isHome={true}>
    
      <Home />
    </AppliedLayout>
  )
}

export default IndexPage
