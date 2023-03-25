import "react-toastify/dist/ReactToastify.css";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Flip, ToastContainer } from "react-toastify";

import AdminHomePage from "./admin/adminhome/AdminHomePage";
import AdminLogin from "./admin/adminlogin/AdminLogin";
import GetProductByCategory from "./components/getproductbycategory/GetProductByCategory";
import HomePage from "./homepage/HomePage";
import CustomerCart from "./screens/cart/CustomerCart";
import CustomerSignIn from "./screens/customer/customersignin/CustomerSignIn";
import CustomerSignUp from "./screens/customer/customersignup/CustomerSignUp";
import ShowAllCustomers from "./screens/customer/showallcustomers/ShowAllCustomers";
import PentKartCustomerHome from "./screens/customersidehomepage/PentKartCustomerHome";
import Order from "./screens/order/Order";
import CreateProductBrand from "./screens/productbrand/createproductbrand/CreateProductBrand";
import ShowAllProductBrands from "./screens/productbrand/showallproductbrands/ShowAllProductBrands";
import CreateProductCategory from "./screens/productcategory/createproductcategory/CreateProductCategory";
import ShowAllProductCategories from "./screens/productcategory/showallproductcategories/ShowAllProductCategories";
import CreateProduct from "./screens/products/createproduct/CreateProduct";
import DisplaySingleProduct from "./screens/products/getsingleproduct/DisplaySingleProduct";
import ShowAllProducts from "./screens/products/showallproducts/ShowAllProducts";
import UpdateProduct from "./screens/products/updateproduct/UpdateProduct";
import Search from "./screens/search/Search";
import { itemRemoveToCartToastMessage } from "./toastify/AllToastMessages";
import { ProductContext } from "./utils/ProductContext";

function App() {
  const [customerStatus, setCustomerStatus] = useState(false);
  const [adminStatus, setAdminStatus] = useState(false);
  const [customerDetails, setcustomerDetails] = useState(false);

  // for cart
  const [cart, setCart] = useState([]);

  const setCustomerDetailsFunction = (value) => {
    setcustomerDetails(value);
  };

  // fetch cart from local storage
  const addProduct = (data) => {
    const productExists = cart.find((item) => item._id === data._id);
    console.log("Printing", productExists);
    if (productExists) {
      setCart(
        cart.map((items) =>
          items._id === data._id
            ? {
                ...productExists,
                productStockQuantity: productExists.productStockQuantity + 1,
              }
            : items
        )
      );
    } else {
      setCart([...cart, { ...data, productStockQuantity: 1 }]);
      console.log("from app.js", cart);
    }
    console.log("Product Price : ", productExists.productPrice);
  };

  const removeProduct = (data) => {
    const productExists = cart.find((item) => item._id === data._id);
    console.log(" Product Exists", productExists);
    if (productExists.productStockQuantity === 1) {
      itemRemoveToCartToastMessage();
      // console.log("working remove product");
      setCart(cart.filter((items) => items._id !== data._id));
    } else {
      setCart(
        cart.map((items) =>
          items._id === data._id
            ? {
                ...productExists,
                productStockQuantity: productExists.productStockQuantity - 1,
              }
            : items
        )
      );
    }

    const removeQuantity = (data) => {};
  };
  // Whenever you refresh the page this useEffect will gets called

  useEffect(() => {
    // Everything in the local storage is stored in the form of string
    if (cart !== null) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    // Everything in the local storage is stored in the form of string
    if (customerDetails !== null) {
      localStorage.setItem("customerdetail", JSON.stringify(customerDetails));
    }
  }, [customerDetails]);

  useEffect(() => {
    // Everything in the local storage is stored in the form of string
    if (customerStatus !== null) {
      localStorage.setItem("customerstatus", JSON.stringify(customerStatus));
    }
  }, [customerStatus]);

  const cartData = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    // 'cart' is user defined key used to get cart

    setCart(cartData);
  }, []);

  const UserStatus = JSON.parse(localStorage.getItem("customerstatus"));
  useEffect(() => {
    // 'cart' is user defined key used to get cart

    setCustomerStatus(UserStatus);
  }, []);

  const UserData = JSON.parse(localStorage.getItem("customerdetail"));
  useEffect(() => {
    // 'cart' is user defined key used to get cart

    setcustomerDetails(UserData);
  }, []);

  const customerStatusSetter = (data) => {
    setCustomerStatus(data);
  };

  const adminStatusSetter = (data) => {
    setAdminStatus(data);
  };

  return (
    <BrowserRouter>
      <ProductContext.Provider
        value={{
          cart,
          setCart,
          addProduct,
          removeProduct,
          setCustomerDetailsFunction,
          customerDetails,
          customerStatus,
          customerStatusSetter,
        }}
      >
        <Routes>
          {/* Home route */}
          <Route
            exact
            path="/"
            element={<HomePage status={adminStatus} />}
          ></Route>

          {/* Navigation routes */}

          {/* Admin route */}
          <Route exact path="/adminlogin" element={<AdminLogin />}></Route>

          <Route
            exact
            path="/admin/adminhome"
            element={<AdminHomePage />}
          ></Route>

          {/* Product route */}
          <Route exact path="/products" element={<ShowAllProducts />}></Route>

          <Route
            exact
            path="/products/:id"
            element={<DisplaySingleProduct />}
          />

          <Route
            exact
            path="/products/createproduct"
            element={<CreateProduct />}
          ></Route>

          <Route
            exact
            path="/products/update/:id"
            element={<UpdateProduct />}
          />

          {/* Customer route */}
          <Route
            exact
            path="/customers/customersignin"
            element={<CustomerSignIn />}
          ></Route>

          <Route
            exact
            path="/customers/customersignup"
            element={<CustomerSignUp />}
          ></Route>

          <Route
            exact
            path="/customers/showallcustomers"
            element={<ShowAllCustomers />}
          ></Route>

          <Route
            exact
            path="/customer/pentkart"
            element={<PentKartCustomerHome status={customerStatus} />}
          ></Route>

          {/* Category route */}
          <Route
            exact
            path="/productcategories"
            element={<ShowAllProductCategories />}
          ></Route>

          <Route
            exact
            path="/productcategories/create"
            element={<CreateProductCategory />}
          ></Route>

          <Route
            exact
            path="/products/categories/"
            element={<GetProductByCategory />}
          />

          {/* Brand route */}
          <Route
            exact
            path="/productbrands/create"
            element={<CreateProductBrand />}
          />

          <Route
            exact
            path="/productbrands"
            element={<ShowAllProductBrands />}
          ></Route>

          <Route
            exact
            path="/productbrands/create"
            element={<CreateProductBrand />}
          ></Route>

          {/* <Route exact path="/customers/:id" element={<UpdateCustomer />} /> */}

          {/* Search route */}
          <Route exact path="/search" element={<Search />} />

          {/* Cart route */}
          <Route exact path="/cart" element={<CustomerCart />} />

          {/* Order route */}
          <Route exact path="/order" element={<Order />} />
        </Routes>
      </ProductContext.Provider>

      {/* For toast messages */}
      <ToastContainer transition={Flip} />
    </BrowserRouter>
  );
}

export default App;
