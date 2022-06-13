import { useContext } from "react";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  const { getTotal } = useContext(CartContext);

  const total = getTotal();
  return (
    <Badge badgeContent={total} color="error">
      <IconButton component={Link} to="/cart">
        <ShoppingCartIcon />
      </IconButton>
    </Badge>
  );
};

export default CartWidget;
