import React from "react"


import MainTemplatePage from "../MainTemplatePage"
import BasicInfoPanel from "../../SharedComponents/BasicInfoPanel"


const BasicInfoPage = (props) => (
    <MainTemplatePage noSearchbar>
      <BasicInfoPanel>
        {props.children}
      </BasicInfoPanel>
    </MainTemplatePage>
  )

export default BasicInfoPage
