import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

// CONTEXT
import { UserProvider } from "./contexts/User.context.jsx";
import { ProductProvider } from "./contexts/Productss.context.jsx";
import { CartProvider } from "./contexts/Cart.context.jsx";

import "./index.scss";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
