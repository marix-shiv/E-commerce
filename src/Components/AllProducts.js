import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Filterpro from "./Filterpro";
import Filcard from "./Filcard";

const AllProducts = () => {
  const pdata = useSelector((state) => state.products.allProducts);
  const filCategory = [
    ...new Set(
      pdata.map((ele) => {
        return ele.category;
      })
    ),
  ];
  const [filData, setfilData] = useState([]);
  useEffect(() => {
    setfilData(pdata);
  }, [pdata]);
  const filterFun = (category) => {
    const filDataFinal = pdata.filter((ele) => {
      return ele.category.toLowerCase() === category.toLowerCase();
    });
    setfilData([...filDataFinal]);
  };
  console.log(filData);
  return (
    <>
      <h1 className="text-center mt-2">User Products</h1>
      <hr />
      <div>
        <div className="d-flex justify-content-center gap-4 mt-4">
          {filCategory.map((ele, ind) => {
            return (
              <Filterpro
                key={ind}
                category={ele}
                onClick={() => {
                  filterFun(ele);
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="py-5">
        {filData.map((ele, ind) => {
          return (
            <div style={{ height: "280px" }}>
              <Filcard
                id={ele.id}
                title={ele.title}
                brand={ele.brand}
                description={ele.description}
                price={ele.price}
                thumbnail={ele.images[0]}
                rating={ele.rating}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllProducts;
