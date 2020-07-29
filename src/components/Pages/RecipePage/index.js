import React from "react"

import {
  Container,
  Grid
} from "@material-ui/core"

import {TopSquiggle} from "../../Backgrounds/Squiggles"
import woodBackground from "../../../assets/wood-background.jpg"

import NavMenu from "../../SharedComponents/NavMenu"
import MainTemplatePage from "../MainTemplatePage/"

import BaseCard from "../../SharedComponents/BaseCard"


const HomePage = () => {
  const testRecipe = {
    name: "Test Recipe",
    ingredients: [
      "flour",
      "sugar",
      "salt"
    ]
  }

  return (
    <MainTemplatePage>
        <BaseCard contents={testRecipe} />

    </MainTemplatePage>
  )
}

export default HomePage
