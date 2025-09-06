import CartList from "./CartList";

const CartContainer = ({ cart }) => {
  // console.log(cart);
  return (
    <div className="w-full sm:w-2/5 ">
      <h1 className="text-blue-400 font-bold text-center text-3xl my-4">
        Checkout Cart
      </h1>
      <div className="flex justify-between text-blue-600 font-medium text-xl">
        <h3>Serial</h3>
        <h3>Name</h3>
        <h3>Price</h3>
        <h3>Action</h3>
      </div>
      {cart.map((item, index) => (
        <CartList item={item} key={index} index={index}></CartList>
      ))}
    </div>
  );
};

export default CartContainer;
