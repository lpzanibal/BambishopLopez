import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import Typography from "@mui/material/Typography";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    if (!categoryId) {
      getProducts().then((response) => {
        setLoading(false);
        setProducts(response);
      });
    } else {
      getProductsByCategory(categoryId).then((response) => {
        setLoading(false);
        setProducts(response);
      });
    }
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
