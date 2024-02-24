import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import { Container } from "react-bootstrap";
// import products from "../../data/products";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios("http://localhost:3004/products").then((data) => {
      setProducts(data.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div>
      <Container className="mt-5">
        <div className="mb-5">
          <Carousel />
        </div>
        <ProductsSection
          title="Latest Products"
          products={products.slice(0, 10)}
        />
        <ProductsSection title="Offers" products={products.slice(10, 20)} />
      </Container>
    </div>
  );
}

// axios("http://localhost:3004/products?q=iphone").then((data) => {
//   console.log(data);
// });
