import React from "react"

import {
  Box,
  Paper,
  Grid,
  Typography,
  Input,
  ButtonBase,
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
    width: "100%",
    "&:hover":{
      backgroundColor: "whitesmoke"
    }
  },
  button: {
    width: "100%"
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
        <ButtonBase className={classes.button} onClick={props.clickHandler} disableRipple>
        <Paper
          variant="outlined"
          className={classes.root}>
          <Box className={classes.titleBox}>
            <AddIcon fontSize="large" />
            <Typography textAlign="center" className={classes.title}>
              Create New {props.type}
            </Typography>
          </Box>
        </Paper>
        </ButtonBase>
      </Box>
    </Grid>
  )
}

export default CreateNewCard
