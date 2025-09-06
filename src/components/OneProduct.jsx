const OneProduct = ({ element, handleAddToCart }) => {
  // console.log(element);
  const { image, title, price, description } = element;
  return (
    <div className="w-80 space-y-2 text-justify p-5 border-2 border-gray-500">
      <img src={image} className="w-full h-48" />
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-base opacity-70">{description}</p>
      <h3 className="text-lg font-medium">Price : {price} taka</h3>
      <button
        onClick={() => handleAddToCart(element)}
        className="bg-green-500 px-4 py-2"
      >
        Add to cart
      </button>
    </div>
  );
};

export default OneProduct;
