import { useState, useContext } from "react";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../services/firebase";
import CartContext from "../../context/CartContext";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

const Order = () => {
  const { removeAll, items, getTotalPrice, getTotalQuantity } =
    useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
  const [orderId, setOrderId] = useState(null);
  const totalPrice = getTotalPrice();
  const totalItems = getTotalQuantity();

  const createOrder = () => {
    setLoading(true);
    const objOrder = {
      buyer: {
        name: name,
        email: email,
        phone: phone,
        address: address,
        comment: comment,
      },
      items: items,
      total: getTotalPrice(),
    };

    const ids = items.map((prod) => prod.id);
    const batch = writeBatch(db);
    const outOfStock = [];
    const collectionRef = collection(db, "products");

    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const prodQuantity = items.find(
            (prod) => prod.id === doc.id
          )?.quantity;

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(db, "orders");
          return addDoc(collectionRef, objOrder);
        } else {
          return Promise.reject({ type: "out_of_stock", products: outOfStock });
        }
      })
      .then(({ id }) => {
        batch.commit();
        removeAll();
        setOrderId(id);
      })
      .catch((error) => {
        alert("Algunos productos no tienen stock");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (orderId) {
    return (
      <Typography variant="body1" sx={{ mt: 5 }}>
        Compra finalizada. Su código de orden es: <b>{orderId}</b>
      </Typography>
    );
  }

  if (totalItems === 0) {
    return (
      <Typography variant="body1" sx={{ mt: 5 }}>
        No tienes ningún producto en tu carrito.{" "}
        <Link to="/">Ver productos</Link>
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h5" sx={{ my: 2 }}>
        Finalizar Compra
      </Typography>
      <Container width="sm">
        <Grid container justifyContent="flex-end" sx={{ mb: 1 }}>
          <Typography variant="body2">Total: ${totalPrice}</Typography>
        </Grid>
        <Stack>
          <Grid container sx={{ mb: 2 }}>
            <Grid item md={6}>
              <TextField
                id="name"
                label="Nombre"
                variant="outlined"
                value={name}
                onChange={(event) => setName(event.target.value)}
                sx={{ px: 1 }}
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                sx={{ px: 1 }}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container sx={{ mb: 2 }}>
            <Grid item md={6}>
              <TextField
                id="address"
                label="Dirección"
                variant="outlined"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                sx={{ px: 1 }}
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                id="phone"
                label="Teléfono"
                variant="outlined"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                sx={{ px: 1 }}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container sx={{ mb: 2 }}>
            <Grid item md={12}>
              <TextField
                id="comment"
                label="Observación"
                variant="outlined"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                sx={{ px: 1 }}
                multiline
                fullWidth
              />
            </Grid>
          </Grid>
          <Button size="large" variant="contained" onClick={createOrder}>
            {!loading ? "COMPRAR CARRITO" : "COMPRANDO..."}
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Order;
