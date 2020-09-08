import React from "react"

import {
  Typography,
  Box,
  ButtonBase,
  makeStyles
} from "@material-ui/core"

import UnauthLayout from "./UnauthLayout"

import {BoxDivider} from "./AboutPage"

import materialLogo from "../../../assets/material-ui.png"
import reactLogo from "../../../assets/react.png"
import pythonLogo from "../../../assets/python.png"
import flaskLogo from "../../../assets/flask-preview-400.jpg"
import portrait from "../../../assets/portrait.jpg"
import resume from "../../../assets/wenzel_resume_2020.pdf"

const useStyles = makeStyles({
  buttonDisplays: {
    display: "flex",
    justifyContent: "center",
    "& img":{
      height: 100,
      width: 100,
    },
    "& button":{
      margin: "0px 10px",
      borderRadius: "100%"
    }
  },
  portrait: {
    borderRadius: "100%",
    height: 300,
    width: 300,
    margin: "auto"

  }
})

const ParagraphSpacers = (props) => (
  <Box mb={1}>
    <Typography variant={props.variant} align={props.align}>
      {props.children}
    </Typography>
  </Box>
)

const LearnMorePage = () => {
  const classes = useStyles()
  return (
    <UnauthLayout backgroundColor="gray">
      <ParagraphSpacers variant="h4">About the App</ParagraphSpacers>
      <ParagraphSpacers>
        SousChef is a web application designed to make meal planning fast, easy, and fun.
        Users provide the urls of their favorite recipes, and the app does the rest, parsing the lines and providing a best guess
        of the ingredients. The recipe is then saved in a virtual recipe box, and can be combined with other recipes to make grocery
        lists and meal plans.
      </ParagraphSpacers>
      <ParagraphSpacers>
        It was built as a portfolio project by Steve Wenzel (that's me), and is constantly being modified and improved. You can
        track the progress of this project (as well as other things I'm working on) <a href="http://wenzstev.github.io" target="_blank">here</a>.
      </ParagraphSpacers>
      <BoxDivider />
      <ParagraphSpacers variant="h4">The Stack</ParagraphSpacers>
      <ParagraphSpacers>
        SousChef was built with a combination of JavaScript and Python. It uses ReactJS and the Material-UI library for its frontend,
        and Flask for its backend.
      </ParagraphSpacers>
      <ParagraphSpacers variant="h5">
        The Frontend
      </ParagraphSpacers>
      <Box className={classes.buttonDisplays}>
        <ButtonBase><img src={reactLogo} /></ButtonBase>
        <ButtonBase><img src={materialLogo} /></ButtonBase>
      </Box>
      <ParagraphSpacers>
        The frontend is built in React, using Material-UI for styling and components. It is exclusively built with functional
        components; hooks are used when state or side effects are required. API calls to the backend are handled with the Axios
        library, and a small (and increasingly vestigal) Redux store is used for storing user informaiton.
      </ParagraphSpacers>
      <ParagraphSpacers>
        The use of modern React patterns such as hooks and functional components ensures the code is fast, easy to read,
        and easy to update. Source code for the frontend is available <a href="https://github.com/wenzstev/grocery-app-frontend" target="_blank">here.</a>
      </ParagraphSpacers>
      <ParagraphSpacers variant="h5">
        The Backend
      </ParagraphSpacers>
      <Box className={classes.buttonDisplays}>
        <ButtonBase><img src={pythonLogo}/></ButtonBase>
        <ButtonBase><img src={flaskLogo}/></ButtonBase>
      </Box>
      <ParagraphSpacers>
        The backend takes the form of a RESTful API, built primarily in Flask with a number
        of other Python libraries in supporting roles. In particular, it makes use of
         the <a href="https://spacy.io/" target="_blank">spaCy</a> library for Natural Language Processing. Through
        the use of a custom-trained library, spaCy is able to recognize likely ingredients in lines,
        largely automating the process of digitizing recipes.
      </ParagraphSpacers>
      <ParagraphSpacers>
        The database is built using SQLite, with SQLAlchemy as the ORM. It is designed to allow the relationships
        between Ingredients and Recipes to do most of the organizational work, allowing fast and easy lookup of
        Recipes and implicit ingredient consolidation. You can read more about how I designed the
        database <a href="https://wenzstev.github.io/2020/05/Designing-A-New-Database.html" target="_blank">here.</a>
      </ParagraphSpacers>
      <ParagraphSpacers>
        Security is provided by Signed Web Tokens, utilizing a two-token system as laid out
        in <a href="https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#silent_refresh" target="_blank">this</a> blog post.
        It makes use of a short-lived access token for requests, and a longer-lived refresh token to secure more sensitive information. You
        can read about my specific implementation
        in <a href="https://wenzstev.github.io/2020/08/Authentication-Part-1.html" target="_blank">Part 1</a> and <a href="https://wenzstev.github.io/2020/08/Authentication-Part-2.html" target="_blank">Part 2</a> of
        my blog post on the matter.
      </ParagraphSpacers>
      <ParagraphSpacers>
        The source code for the backend is available for review <a href="https://github.com/wenzstev/groceryappRestAPI" target="_blank">here.</a>
      </ParagraphSpacers>
      <BoxDivider />
      <ParagraphSpacers variant="h4" align="center">About the Developer</ParagraphSpacers>
      <Box m={2} display="flex" justifyContent="center">
        <img src={portrait} className={classes.portrait} />
      </Box>
      <ParagraphSpacers>
        Hi, I'm Steve! I'm a web developer living in Brooklyn. I graduated from Washington University in St. Louis in 2017, where I was heavily involved in my school's
        computer repair and 3D printing programs. I have worked a remote job since graduating (and long before COVID), and have spent time in Colorado, Texas, Germany, and Spain. When I'm not coding,
        I'm an avid cook and baker, and I tend to pick up new hobbies like a lint roller.
      </ParagraphSpacers>
      <ParagraphSpacers>
        I'm proficient in Python and JavaScript, and I have experience with SQL, C#, and Java. I built this project as part of my ongoing search for a job; if you're interested,
        you can check out my resume <a href={resume} target="_blank">here,</a> or contact me in general at <a href="mailto: wenzelstev@gmail.com" target="_blank">wenzelstev@gmail.com</a>.
      </ParagraphSpacers>

    </UnauthLayout>
  )
}

export default LearnMorePage
