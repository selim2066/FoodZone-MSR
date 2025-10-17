import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const DisplayCart = () => {
  const { cart, food_list } = useContext(StoreContext);

  const filteredCart = food_list
    .filter((food) => cart[food._id])
    .map((food) => ({
      ...food,
      quantity: cart[food._id],
    }));
  return (
   <div className="overflow-x-auto w-11/12 mx-auto lg:mt-10">
    <table className="table-auto w-full border-collapse text-center">
      <thead>
        <tr className="border-b">
          <th className="py-3 font-bold text-lg text-gray-600">Product</th>
          <th className="py-3 font-bold text-lg text-gray-600">Title</th>
          <th className="py-3 font-bold text-lg text-gray-600">Price</th>
          <th className="py-3 font-bold text-lg text-gray-600">Quantity</th>
          <th className="py-3 font-bold text-lg text-gray-600">Total</th>
          <th className="py-3"></th>
        </tr>
      </thead>

      <tbody>
        {filteredCart.map((cartItem) => (
          <tr
            key={cartItem._id}
            className="border-b hover:bg-amber-50 transition-colors"
          >
            <td className="py-3">
              <img
                className="w-20 h-20 object-cover mx-auto rounded-lg"
                src={cartItem.image}
                alt={cartItem.name}
              />
            </td>
            <td className="py-3 font-semibold text-gray-800">{cartItem.name}</td>
            <td className="py-3 text-gray-700">${cartItem.price}</td>
            <td className="py-3 text-gray-700">{cartItem.quantity}</td>
            <td className="py-3 font-semibold text-amber-600">
              ${cartItem.price * cartItem.quantity}
            </td>
            <td className="py-3">
              <button className="btn btn-sm bg-red-500 hover:bg-red-600 text-white">
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default DisplayCart;
