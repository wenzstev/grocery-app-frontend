import React from "react"

import {useHistory, withRouter} from "react-router-dom"

import MainTemplatePage from "../MainTemplatePage"
import ButtonTemplate from "../../Templates/ButtonTemplate"

import {
  Box,
  Paper,
  Typography,
  Divider,
  Grid,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    borderRadius: "15px",
    position: "relative",
    top: "10vh",
    padding: "20px"
  }
})

const NotFoundPage = (props) => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <MainTemplatePage noSearchbar>
      <Paper className={classes.root}>
          <Typography variant="h1">
            Hmmm...
          </Typography>
          <Typography>
            Looks like the page you're trying to find doesn't exist! Sorry about that.
          </Typography>
          <Box m={2}>
            <Divider />
          </Box>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={6}>
              <ButtonTemplate
                color="primary"
                onClick={()=>history.goBack()}>Go Back</ButtonTemplate>
            </Grid>
            <Grid item xs={6}>
              <ButtonTemplate color="secondary"
                onClick={()=>props.history.push("/")}
                >Go to Homepage</ButtonTemplate>
            </Grid>
          </Grid>
      </Paper>
    </MainTemplatePage>
  )
}

export default withRouter(NotFoundPage)
