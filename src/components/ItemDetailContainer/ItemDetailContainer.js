import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    getDoc(doc(db, "products", productId))
      .then((response) => {
        const product = { id: response.id, ...response.data() };
        setProduct(product);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return <>{loading ? "Cargando.." : <ItemDetail product={product} />}</>;
};

export default ItemDetailContainer;
