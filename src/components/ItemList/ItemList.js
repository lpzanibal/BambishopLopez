import Box from "@mui/material/Box";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <Box
      sx={{
        margin: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </Box>
  );
};

export default ItemList;
