import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

// REDUX PERSIS
import { PersistGate } from "redux-persist/integration/react";

// REDUX
import { Provider } from "react-redux";
import { store, persistor } from "./store/store.js";

import "./index.scss";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
