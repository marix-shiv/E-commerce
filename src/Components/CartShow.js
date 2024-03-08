import React from "react";
import { useSelector } from "react-redux";
import CheckOut from "./CheckOut";

const CartShow = () => {
  const cartData = useSelector((state) => state.products.cartItem);
  const total = cartData.reduce((acc, ele, ind, arr) => {
    return ele.total + acc;
  }, 0);
  const qty = cartData.reduce((acc, ele, ind, arr) => {
    return ele.qty + acc;
  }, 0);
  console.log(total);
  return (
    <div style={{ minHeight: "56vh" }}>
      <h1 className="text-center shadow-lg p-1 m-2 bg-body rounded">MY CART</h1>
      <div className="d-flex flex-row shadow-lg p-3 m-2 bg-body rounded">
        <div>
          {cartData.length !== 0 ? (
            cartData.map((ele) => {
              return (
                <div className="d-flex flex-row gap-4">
                  <CheckOut
                    id={ele.id}
                    title={ele.title}
                    brand={ele.brand}
                    description={ele.description}
                    price={ele.price}
                    thumbnail={ele.thumbnail}
                    rating={ele.rating}
                    qty={ele.qty}
                  />
                </div>
              );
            })
          ) : (
            <div className="text-center" style={{ marginLeft: "570px" }}>
              <h1>Oops no items added...</h1>
            </div>
          )}
        </div>
        <div>
          {cartData.length !== 0 ? (
            <div
              className="shadow-lg p-3 m-2 bg-body rounded"
              style={{ marginTop: "150px", width: "302px" }}
            >
              <h3 className="text-center">Quantity: {qty}</h3>
              <h3 className="text-center">Total Price: {total}</h3>
            </div>
          ) : (
            <div style={{ height: "46vh" }}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartShow;
