import "./components/category-componets/category-item-styles.scss";
import Directory from "./components/Directory/directory";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Authentication from "./components/authentication/authentication";
import ShopComponent from "./components/shop/shop.component";
import Checkout from "./components/checkout/checkout.component";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Directory />} />
        <Route path="shop/*" element={<ShopComponent />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />}/>
      </Route>
    </Routes>
  );
}

export default App;
