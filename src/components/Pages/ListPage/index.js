import React from "react"

import {
  Container,
  Box
} from "@material-ui/core"

import MainTemplatePage from "../MainTemplatePage/"

import BaseCard from "../../SharedComponents/BaseCard"

const ListPage = (props) => {
  const testList = {
    name: "test",
    ingredients: [
      "sugar",
      "flour",
      "flaxseed oil"
    ]
  }
  return (
    <MainTemplatePage>
      <BaseCard contents={testList} />

    </MainTemplatePage>
  )
}

export default ListPage
