import { Button } from "react-bootstrap";
import "./ProductsFilters.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getFilterQuery } from "../../utils/getFilterQuery";

export default function ProductsFilters({ setFilterQuery }) {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    q: "",
    category: "",
    price_gte: "",
    price_lte: "",
  });

  useEffect(() => {
    axios("http://localhost:3004/categories").then((data) => {
      setCategories(data.data);
    });
  }, []);
  
  function changeInputValue(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function filterProducts(e) {
    e.preventDefault();
    const query = getFilterQuery(formData);

    setFilterQuery(query);
  }

  return (
    <div className="d-flex justify-content-between mb-3">
      <form className="d-flex gap-3" onSubmit={filterProducts}>
        <input
          className="filter__input"
          placeholder="Search..."
          type="text"
          name="q"
          onChange={changeInputValue}
          value={formData.q}
        />
        <select
          className="filter__input"
          name="category"
          onChange={changeInputValue}
          value={formData.category}
        >
          <option>Choose and option</option>
          {categories.map((category) => {
            return (
              <option
                key={`products-filter-categories-${category.id}`}
                value={category.name}
              >
                {category.name}
              </option>
            );
          })}
        </select>
        <input
          className="filter__input"
          name="price_gte"
          placeholder="Min price"
          type="number"
          onChange={changeInputValue}
          value={formData.price_gte}
        />
        <input
          className="filter__input"
          name="price_lte"
          placeholder="Max price"
          type="number"
          onChange={changeInputValue}
          value={formData.price_lte}
        />
        <div className="d-flex gap-2">
          <Button type="submit" className="px-4">
            Filter
          </Button>
          <Button
            className="px-4"
            onClick={() => {
              setFilterQuery("");
              setFormData({
                q: "",
                category: "",
                price_gte: "",
                price_lte: "",
              });
            }}
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}

// http://localhost:3004/products?q=iphone&category=&price_gte=&price_lte=

// const obj = {
//   search: 'iPhone',
//   category: 'smartphones'
// }
// // min_price: 1000

// obj = {
//   search: 'iPhone',
//   category: 'smartphones',
//   min_price: 1000,
// }
// //category: laptops

// obj = {
//   search: 'iPhone',
//   min_price: 1000,
//   category: 'laptops'
// }
