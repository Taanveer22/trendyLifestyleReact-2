const CartList = ({ item, index, handleDelete }) => {
  // console.log(item);
  const { title, price } = item;
  return (
    <div className="flex justify-between items-center my-2">
      <h3>{index + 1}</h3>
      <h3>{title}</h3>
      <h3>{price}</h3>
      <button onClick={() => handleDelete(item)} className="bg-red-600 p-1">
        Delete
      </button>
    </div>
  );
};

export default CartList;
