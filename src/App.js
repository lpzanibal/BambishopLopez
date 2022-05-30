import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const theme = createTheme({
  palette: {
    background: {
      default: "#eeeeee",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="lg">
        {/*<ItemListContainer />*/}
        <ItemDetailContainer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
