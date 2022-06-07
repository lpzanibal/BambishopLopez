import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
  const { product } = props;
  const [quantity, setQuantity] = useState(0);

  const handleOnAdd = (count) => {
    setQuantity(count);
  };

  return (
    <Card sx={{ margin: 1 }}>
      <CardContent>
        <Grid container>
          {product ? (
            <>
              <Grid lg={6} item>
                <img
                  src={product.pictureUrl}
                  alt={product.title}
                  width="100%"
                />
              </Grid>
              <Grid item sx={{ pl: 2 }}>
                <Stack spacing={2}>
                  <Typography variant="h5" color="text.secondary">
                    <b>{product.title}</b>
                  </Typography>
                  <Typography variant="h4">${product.price}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {`stock: ${product.stock}`}
                  </Typography>
                  {quantity > 0 ? (
                    <Link to="/cart">Terminar compra</Link>
                  ) : (
                    <ItemCount
                      stock={product.stock}
                      initial={0}
                      onAdd={handleOnAdd}
                    />
                  )}
                </Stack>
              </Grid>
            </>
          ) : (
            "Cargando..."
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ItemDetail;
