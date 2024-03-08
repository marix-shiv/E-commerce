import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { addCartRedux } from "../Redux/productSlice";
import Modal from "react-bootstrap/Modal";

const Filcard = ({
  id,
  title,
  brand,
  description,
  price,
  thumbnail,
  rating,
}) => {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(
      addCartRedux({
        id: id,
        title: title,
        brand: brand,
        description: description,
        price: price,
        thumbnail: thumbnail,
        rating: rating,
      })
    );
  };

  const [show, setShow] = useState();

  const showModel = () => {
    setShow(!show);
  };
  const closeShow = () => {
    console.log("clicked", show);
    // setShow(!show);
  };

  return (
    <div
      className="d-flex flex-column shadow-lg p-3 m-2 bg-body rounded"
      style={{ width: "1450px", height: "280px" }}
      onClick={showModel}
    >
      <div>
        <Modal show={show}>
          <Modal.Header closeButton onClick={closeShow}>
            <Modal.Title>{brand}</Modal.Title>
          </Modal.Header>
          <div className="d-flex flex-row">
            <div>
              <img
                variant="top"
                src={thumbnail}
                alt={title}
                style={{ height: "250px", width: "250px", padding: "15px" }}
              />
            </div>
            <div className="mt-5">
              <h5>Model: {title}</h5>
              <h5>Price: ₹ {price}/-</h5>
              <h4>{<Rating value={Math.floor(rating)} />}</h4>
            </div>
          </div>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeShow}>
              Close
            </Button>
            <Button variant="primary" onClick={addItem}>
              Add to cart
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Card className="d-flex flex-row">
        <div>
          <Card.Img
            variant="top"
            src={thumbnail}
            style={{ height: "250px", width: "250px", padding: "15px" }}
          />
        </div>
        <div>
          <Card.Body>
            <Card.Title>
              <h2>Brand: {brand}</h2>
            </Card.Title>
            <Card.Title>Model: {title}</Card.Title>
            <Card.Text>
              <div className="desc">
                <p>{description}</p>
              </div>
              {/* <div>Rating: {Math.floor(rating)}</div> */}
              <Rating value={Math.floor(rating)} />
            </Card.Text>
            <div className="d-flex flex-row gap-3">
              <Badge
                bg="secondary"
                style={{ height: "40px", width: "80px" }}
                className="d-flex align-items-center"
              >
                {<h6 className="m-auto">₹ {price}/-</h6>}
              </Badge>
              <Button variant="primary" onClick={addItem}>
                Add to cart
              </Button>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default Filcard;
