import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ItemCount = ({ item, stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const add = () => {
    setCount(initial);
    onAdd(count);
  };

  return (
    <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Typography variant="body1">
          {item}
          <Typography variant="caption" color="#9e9e9e">
            {` (${stock} disponibles)`}
          </Typography>
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            size="large"
            onClick={decrement}
            disabled={count < 1 || stock === 0}
          >
            <RemoveIcon fontSize="inherit" />
          </IconButton>
          <Typography>{count}</Typography>
          <IconButton
            size="large"
            onClick={increment}
            disabled={count === stock || stock === 0}
          >
            <AddIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Button
          variant="outlined"
          startIcon={<AddShoppingCartIcon />}
          onClick={add}
          disabled={count === 0 || stock === 0}
          fullWidth
        >
          Agregar al carrito
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemCount;
