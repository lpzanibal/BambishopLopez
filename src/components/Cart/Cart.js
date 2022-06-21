import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Cart = () => {
  const { items, removeItem } = useContext(CartContext);
  const { getTotalQuantity, removeAll, getTotalPrice } =
    useContext(CartContext);

  const total = getTotalQuantity();
  const totalPrice = getTotalPrice();

  return (
    <>
      <Typography variant="h5" sx={{ my: 2 }}>
        Carrito de compras
      </Typography>
      <Stack>
        {total > 0 ? (
          <>
            <Grid container justifyContent="flex-end" sx={{ mb: 1 }}>
              <Button onClick={removeAll}>Limpiar carrito</Button>
            </Grid>
            {items.map((item) => {
              return (
                <Paper
                  key={item.id}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 2,
                    px: 2,
                    py: 1,
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography variant="body1">
                      <b>{item.name}</b>
                    </Typography>
                    <Typography variant="body2">
                      Cantidad: {item.quantity}
                    </Typography>
                    <Typography variant="body2">
                      Precio unitario: ${item.price}
                    </Typography>
                    <Typography variant="body2">
                      Subtotal: ${item.price * item.quantity}
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton onClick={() => removeItem(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Paper>
              );
            })}
            <Grid container justifyContent="flex-end" sx={{ mb: 1 }}>
              <Typography variant="body2">Total: ${totalPrice}</Typography>
            </Grid>
            <Button
              size="large"
              variant="contained"
              component={Link}
              to="/order"
            >
              COMPRAR CARRITO
            </Button>
          </>
        ) : (
          <>
            <Typography variant="body1">
              No tienes ningún producto en tu carrito.{" "}
              <Link to="/">Ver productos</Link>
            </Typography>
          </>
        )}
      </Stack>
    </>
  );
};

export default Cart;
