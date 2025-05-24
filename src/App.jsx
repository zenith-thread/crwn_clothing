import { Routes, Route } from "react-router";

// COMPONENTS
import Navigation from "./routes/Navigation/Navigation.component";
import Home from "./routes/Home/Home.component";
import Shop from "./routes/Shop/Shop.component";
import Authentication from "./routes/authentication/Authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
