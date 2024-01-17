import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AntdProvider from "./context/AntdProvider";
import UserProvider from "./context/userContext";
import App from './app/index.jsx'
import LoginPage from "./pages/login/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AntdProvider>
        <BrowserRouter>
      <UserProvider>
        <LoginPage/>
                {/* <App /> */}
            </UserProvider>
        </BrowserRouter>
    </AntdProvider>
);
