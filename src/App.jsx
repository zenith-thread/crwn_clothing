import { Routes, Route } from "react-router";

// COMPONENTS
import Navigation from "./routes/Navigation/Navigation.component";
import Home from "./routes/Home/Home.component";
import Shop from "./routes/Shop/Shop.component";
import SignIn from "./routes/SignIn/SignIn.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
