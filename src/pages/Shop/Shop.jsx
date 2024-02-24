import ProductCard from "../../components/ProductCard/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import ProductsFilters from "../../components/ProductsFilters/ProductsFilters";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios("http://localhost:3004/products?" + filterQuery).then((data) => {
      setProducts(data.data);
      setIsLoading(false);
    });
  }, [filterQuery]);

  return (
    <Container className="my-5">
      <ProductsFilters setFilterQuery={setFilterQuery} />
      {isLoading ? (
        <Loader />
      ) : (
        <Row className="gy-4">
          {products.map((product) => {
            return (
              <Col sm={6} md={4} lg={3} key={`products-shop-${product.id}`}>
                <ProductCard product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
}
