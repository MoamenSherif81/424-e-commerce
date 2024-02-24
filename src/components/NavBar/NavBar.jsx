import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useRecoilState } from "recoil";
import { authData } from "../../atoms/authAtom";
import LogoutButton from "../LogoutButton/LogoutButton";

export default function NavBar() {
  const [auth] = useRecoilState(authData);

  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="#home">424 E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-between w-100 align-items-center">
            <div className="d-flex gap-3">
              <Link to="/" className="text-decoration-none text-black">
                Home
              </Link>
              <Link to="/shop" className="text-decoration-none text-black">
                Shop
              </Link>
              {auth.isAuth && (
                <Link to="/cart" className="text-decoration-none text-black">
                  Cart
                </Link>
              )}
            </div>
            <div className="d-flex gap-3">
              {auth.isAuth ? (
                <div className="d-flex align-items-center gap-3">
                  {auth.user.name} <LogoutButton />
                </div>
              ) : (
                <Fragment>
                  <Link to="/login" className="text-decoration-none text-black">
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-decoration-none text-black"
                  >
                    Sign up
                  </Link>
                </Fragment>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default function NavBar() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container">
//         <a className="navbar-brand" href="google.com">Navbar</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="google.com">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" aria-current="page" href="google.com">Shop</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" aria-current="page" href="google.com">Cart</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }
