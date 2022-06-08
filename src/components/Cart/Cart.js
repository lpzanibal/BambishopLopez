import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const { items, removeItem } = useContext(CartContext);

  return (
    <>
      <Typography variant="h5" sx={{ my: 2 }}>
        Carrito de compras
      </Typography>
      <Stack>
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
      </Stack>
    </>
  );
};

export default Cart;
