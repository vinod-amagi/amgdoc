import React from 'react';
import Area from './area/Area'
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: "light",
    primary: {
      main: "#EEFFFF"
    },
    secondary: {
      main: "#0000FF",
      light: "#F4EA86"
    },
    tertiary: {
      t1: "#F8E200",
      t2: "#525e66",
      t3: "#539f00",

    },
    error: {
      main: "#d0021b"
    },
    background: {
      default: "#000",
      paper: "#fff",
    },
    text: {
      primary: '#363f45',
      secondary: "#525e66",
    },
  }
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Area/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
