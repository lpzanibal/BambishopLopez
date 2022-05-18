import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <Badge badgeContent={4} color="error">
      <ShoppingCartIcon />
    </Badge>
  );
};

export default CartWidget;
