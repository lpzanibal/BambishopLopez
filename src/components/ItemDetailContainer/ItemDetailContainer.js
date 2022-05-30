import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../asyncmock";

const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(1).then((response) => {
      setProduct(response);
    });
  }, []);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
