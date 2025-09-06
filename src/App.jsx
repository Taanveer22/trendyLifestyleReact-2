import AllProducts from "./components/AllProducts";
import { useState } from "react";
import CartContainer from "./components/CartContainer";

function App() {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (element) => {
    // console.log(element);
    const isExist = cart.find((existElement) => existElement.id === element.id);
    // console.log(isExist);
    if (!isExist) {
      setCart([...cart, element]);
    } else {
      alert("already exist");
    }
  };
  return (
    <div className="w-11/12 mx-auto flex flex-col sm:flex-row gap-5 justify-between">
      <AllProducts handleAddToCart={handleAddToCart}></AllProducts>
      <CartContainer cart={cart}></CartContainer>
    </div>
  );
}

export default App;
