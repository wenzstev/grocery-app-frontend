import React from "react"

import MainTemplatePage from "../MainTemplatePage/"

const IngredientPage = (props) => {
  return (
    <MainTemplatePage setToken={props.setToken}>
      <p>Ingredients</p>
    </MainTemplatePage>
  )
}

export default IngredientPage
