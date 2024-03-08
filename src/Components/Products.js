import React from "react";
import { useSelector } from "react-redux";
import Filcard from "./Filcard";

const Products = () => {
  const pdata = useSelector((state) => state.products.allProducts);
  return (
    <div className="py-1">
      <h1 className="text-center shadow-lg p-2 m-2 bg-body rounded">
        All Products
      </h1>
      {pdata.map((ele, ind) => {
        return (
          <div style={{ height: "280px" }}>
            <Filcard
              id={ele.id}
              title={ele.title}
              brand={ele.brand}
              description={ele.description}
              price={ele.price}
              thumbnail={ele.thumbnail}
              rating={ele.rating}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
