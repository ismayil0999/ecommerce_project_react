import { Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import Body from "./pages/Body";
import Account from "./components/Account";
import Favorites from "./components/Favorites";
import BuyProduct from "./pages/BuyProduct";
import Payment from "./pages/Payment";
import Login from "./components/Login";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/etraflı/:id" element={<SingleProduct />} />
        <Route path="/buyproduct/:id" element={<BuyProduct/>}/>
        <Route path="/favorite" element={<Favorites/>}/>
        <Route path="/payment" element={<Payment/>}></Route>
        <Route path="/account" element={<Account/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
