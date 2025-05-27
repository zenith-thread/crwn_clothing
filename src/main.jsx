import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

// REDUX
import { Provider } from "react-redux";
import { store } from "./store/store.js";

import "./index.scss";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
