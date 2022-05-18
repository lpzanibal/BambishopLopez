import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <ItemListContainer greeting="Hola!!! :D" />
    </React.Fragment>
  );
}

export default App;
