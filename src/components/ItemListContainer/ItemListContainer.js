import React, { useState } from "react";
import Box from "@mui/material/Box";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = (props) => {
  const [item, setItem] = useState({ name: "iPhone 12", stock: 5, initial: 1 });

  const addToCart = (count) => {
    setItem({ ...item, stock: item.stock - count });
    alert(`${count} items añadidos al carrito`);
  };

  return (
    <Box
      sx={{
        margin: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <ItemCount
        item={item.name}
        stock={item.stock}
        initial={item.initial}
        onAdd={(count) => addToCart(count)}
      />
    </Box>
  );
};

export default ItemListContainer;
