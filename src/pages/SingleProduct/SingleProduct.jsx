import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

export default function SingleProduct() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    axios(`http://localhost:3004/products/${id}`).then((data) =>
      setProduct(data.data)
    );
  }, [id]);

  return (
    <Container>
      <img src={product.thumbnail} />
      {product.title}
    </Container>
  );
}
