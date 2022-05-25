import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = ({ id, title, price, description, stock, pictureUrl }) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia component="img" height="140" image={pictureUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>{title}</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {`stock: ${stock}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver mas</Button>
      </CardActions>
    </Card>
  );
};

export default Item;
