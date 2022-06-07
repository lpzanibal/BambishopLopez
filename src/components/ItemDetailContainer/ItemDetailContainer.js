import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../asyncmock";

const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId).then((response) => {
      setProduct(response);
    });
  }, []);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
