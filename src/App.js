import "./components/category-componets/category-item-styles.scss";
import Directory from "./components/Directory/directory";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import SignIn from "./components/signIn/signIn";



function Shop() {
  return (
    <div>
      <h1>this is shop list</h1>
    </div>
  );
}
function App() {
  return (
    <Routes>
    
      <Route path="/" element={<Navigation />}>
        <Route index element={<Directory />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
