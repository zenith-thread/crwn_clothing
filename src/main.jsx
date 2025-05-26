import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

// CONTEXT
import { UserProvider } from "./contexts/User.context.jsx";
import { CategoriesProvider } from "./contexts/Categories.context.jsx";
import { CartProvider } from "./contexts/Cart.context.jsx";

import "./index.scss";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
