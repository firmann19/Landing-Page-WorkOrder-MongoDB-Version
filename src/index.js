import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Footer.css";
import "./styles/Header.css";
import "./styles/Navbar.css";
import "./styles/Featured.css";
import "./styles/LoginPage.css";
import "./styles/Utilities.css";
import "./styles/Complete-Checkout.css";
import "./styles/HistoryWo.css";
import "./styles/Approval.css";
import "./styles/CreateWO.css";
import "./styles/Blog.css";
import "./styles/ContactUs.css"
import "./styles/HistoyWODetail.css"
import "./styles/listwo.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
