import { createMuiTheme } from "@material-ui/core/styles";

const primeColor = "#C70039";
const secondaryColor = "#494949";
export default createMuiTheme({
  palette: {
    common: {
      primeColor: `${primeColor}`,
      secondaryColor: `${secondaryColor}`
    },
    primary: {
      main: `${primeColor}`
    },
    secondary: {
      main: `${secondaryColor}`
    }
  },
  typography: {
    header: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "2rem"
    }
  },
  expense: {
    backgroundColor: `${primeColor}`,
    width: "5em",
    height: "5em",
    margin: "-4em 0em 0em 25em"
  },
  income: {
    backgroundColor: "green",
    width: "5em",
    height: "5em",
    margin: "-4em 0em 0em 25em"
  }
});
