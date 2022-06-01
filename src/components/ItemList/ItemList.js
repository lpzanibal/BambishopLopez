import { Typography } from "@mui/material";
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

      {products.length === 0 ? (
        <Typography variant="body1">No hay productos :(</Typography>
      ) : null}
    </Box>
  );
};

export default ItemList;
