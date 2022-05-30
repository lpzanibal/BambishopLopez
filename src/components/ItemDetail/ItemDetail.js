import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ItemDetail = (props) => {
  const { product } = props;

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
