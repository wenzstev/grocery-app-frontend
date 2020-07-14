import {createMuiTheme} from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'
import brown from '@material-ui/core/colors/brown'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[800]
    },
    secondary: {
      main: brown[100]
    }
  }
})

export default theme
