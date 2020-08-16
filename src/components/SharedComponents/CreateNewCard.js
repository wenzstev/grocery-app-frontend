import React from "react"

import {
  Box,
  Paper,
  Grid,
  Typography,
  Input,
  makeStyles
} from "@material-ui/core"

import AddIcon from "@material-ui/icons/Add"

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgba(255,255,255,.8)",
    textAlign: "center",
    height: "280px",
    borderRadius: "15px",
    color: "darkgray",
    "&:hover":{
      backgroundColor: "whitesmoke"
    }
  },
  titleBox: {
    paddingTop: "80px",
    paddingBottom: "100px"
  },
  title: {
    fontSize: "25pt",
    display: "block",
    margin: "0 auto",
  },
})


const CreateNewCard = (props) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box m={2}>
        <Paper variant="outlined" className={classes.root}>
          <Box className={classes.titleBox}>
            <AddIcon fontSize="large" />
            <Typography textAlign="center" className={classes.title}>
              Create New {props.type}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Grid>
  )
}

export default CreateNewCard
