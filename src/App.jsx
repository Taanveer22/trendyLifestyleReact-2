import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="w-11/12 mx-auto flex gap-5 justify-between">
      <AllProducts></AllProducts>
      <Cart></Cart>
    </div>
  );
}

export default App;
