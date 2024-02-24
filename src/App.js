import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import MainLayout from "./layouts/MainLayout";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import IsNotLoggedIn from "./components/ProtectedRoutes/IsNotLoggedIn";
import IsLoggedIn from "./components/ProtectedRoutes/IsLoggedIn";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route
                path="cart"
                element={
                  <IsLoggedIn>
                    <Cart />
                  </IsLoggedIn>
                }
              />
              <Route path="product/:id" element={<SingleProduct />} />
              <Route
                path="login"
                element={
                  <IsNotLoggedIn>
                    <Login />
                  </IsNotLoggedIn>
                }
              />
              <Route
                path="register"
                element={
                  <IsNotLoggedIn>
                    <Register />
                  </IsNotLoggedIn>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
      <ToastContainer />
    </div>
  );
}

export default App;
