import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

// STRIPE
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripe.utils.js";

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
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
