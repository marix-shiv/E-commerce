import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "./Rating";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decQtyRedux, incQtyRedux, remCartItem } from "../Redux/productSlice";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Filcard = ({
  id,
  title,
  brand,
  description,
  price,
  thumbnail,
  rating,
  qty,
}) => {
  const dispatch = useDispatch();

  const delItem = (id) => {
    dispatch(remCartItem(id));
  };
  return (
    <div
      className="d-flex flex-column shadow-lg p-3 m-2 bg-body rounded"
      style={{ width: "1100px", height: "300px" }}
    >
      <Card className="d-flex flex-row">
        <div>
          <Card.Img
            variant="top"
            src={thumbnail}
            style={{ height: "265px", width: "250px", padding: "15px" }}
          />
        </div>
        <div style={{ width: "1200px" }}>
          <Card.Body>
            <div className="w-auto d-flex flex-row justify-content-between">
              <Card.Title>
                <h4>Brand: {brand}</h4>
              </Card.Title>
              <MdDeleteOutline
                fontSize={30}
                onClick={() => {
                  delItem(id);
                }}
              />
            </div>
            <Card.Title>Model: {title}</Card.Title>

            <Card.Text>
              <div className="desc">
                <p>{description}</p>
              </div>

              {/* <div>Rating: {Math.floor(rating)}</div> */}
              <div className="mb-2">
                <Rating value={Math.floor(rating)} />
              </div>
              {
                <h4>
                  <sup>₹ </sup>
                  {price}/-
                </h4>
              }
            </Card.Text>

            <div className="d-flex flex-row gap-3">
              <div
                className="d-flex flex-row gap-3 justify-content-center align-items-center"
                style={{
                  border: "2px solid black",
                  borderRadius: "20px",
                  width: "100px",
                }}
              >
                <FaMinus
                  onClick={() => {
                    dispatch(decQtyRedux(id));
                  }}
                />

                <h5 style={{ marginTop: "6px" }}>{qty}</h5>
                <FaPlus
                  onClick={() => {
                    dispatch(incQtyRedux(id));
                  }}
                />
              </div>
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default Filcard;
