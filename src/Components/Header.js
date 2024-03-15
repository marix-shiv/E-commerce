import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutRedux } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const Header = () => {
  const loginDetails = useSelector((state) => state.user);
  const cartData = useSelector((state) => state.products.cartItem);

  console.log(loginDetails);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logoutRedux());
    navigate("/login");
  };
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand>
            <div>{loginDetails.username}</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
            </Nav>
            <div className="d-flex ">
              <Link variant="outline-success" as={Link} to="/cartshow">
                <CiShoppingCart fontSize={42} />
              </Link>
              <div className="cart">
                <Stack direction="vertical" gap={4}>
                  <Badge pill bg="danger" direction="vertical">
                    {cartData.length}
                  </Badge>
                </Stack>
              </div>

              <Dropdown>
                <Dropdown.Toggle
                  className="mw-30"
                  id="dropdown-button-drop-down-centered"
                  variant="outline-Light"
                  size="block"
                >
                  <Link variant="outline-success">
                    {loginDetails.image ? (
                      <img
                        src={loginDetails.image}
                        alt="img"
                        style={{
                          height: "30px",
                          width: "30px",
                        }}
                      ></img>
                    ) : (
                      <FaUserCircle
                        style={{
                          height: "30px",
                          width: "30px",
                        }}
                      />
                    )}
                  </Link>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="sm"
                  style={{ minWidth: "fit-content" }}
                >
                  {loginDetails.image ? (
                    <Dropdown.Item as={Link} to="/" onClick={logOut}>
                      Logout
                    </Dropdown.Item>
                  ) : (
                    <Dropdown.Item as={Link} to="/login">
                      Login
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
