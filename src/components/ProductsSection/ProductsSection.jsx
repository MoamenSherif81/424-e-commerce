import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductsSection({ title, products }) {
  return (
    <div className="mb-5">
      <h3>{title}</h3>
      <div>
        <Swiper slidesPerView={4} spaceBetween={20}>
          {products.map((product) => {
            return (
              <SwiperSlide className="h-auto">
                <ProductCard product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
