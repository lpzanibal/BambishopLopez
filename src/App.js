import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Order from "./components/Order/Order";
import { CartContextProvider } from "./context/CartContext";

const theme = createTheme({
  palette: {
    background: {
      default: "#eeeeee",
    },
  },
});

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <Container maxWidth="lg">
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route
                exact
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route
                exact
                path="/detail/:productId"
                element={<ItemDetailContainer />}
              />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/order" element={<Order />} />
              <Route path="*" element={<h1>PAGE NOT FOUND 404</h1>} />
            </Routes>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
