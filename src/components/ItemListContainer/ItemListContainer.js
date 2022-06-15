import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Typography from "@mui/material/Typography";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <>
      <Typography variant="h5" sx={{ my: 2 }}>
        {categoryId
          ? `Productos filtrados por categoría: ${categoryId}`
          : "Todos los Productos"}
      </Typography>

      {loading ? "Cargando..." : <ItemList products={products} />}
    </>
  );
};

export default ItemListContainer;
