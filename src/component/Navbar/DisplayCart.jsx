import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const DisplayCart = () => {
  const { cart, food_list, removeCartItem } = useContext(StoreContext);

  const filteredCart = food_list
    .filter((food) => cart[food._id])
    .map((food) => ({
      ...food,
      quantity: cart[food._id],
    }));

  console.log(filteredCart.price);
  const subtotal = filteredCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  console.log("Subtotal:", subtotal);

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
              <td className="py-3 font-semibold text-gray-800">
                {cartItem.name}
              </td>
              <td className="py-3 text-gray-700">${cartItem.price}</td>
              <td className="py-3 text-gray-700">{cartItem.quantity}</td>
              <td className="py-3 font-semibold text-amber-600">
                ${cartItem.price * cartItem.quantity}
              </td>
              <td className="py-3">
                <button
                  onClick={() => removeCartItem(cartItem._id)}
                  className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mx-aut md:my-20 flex justify-between">
        <div className="w-1/3">
          <h1 className="font-bold text-2xl">Cart Totals</h1>
          <div className="mt-5">
            <h2 className="flex justify-between p-5">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </h2>
            <hr />
            <h2 className="flex justify-between p-5">
              <p>Delivery Fee</p>
              <p>$2</p>
            </h2>
            <hr />
            <h3 className="flex justify-between p-5">
              <p>Total</p>
              <p>${subtotal + 2}</p>
            </h3>
            <hr />
          </div>
          <button className="btn bg-amber-500 w-50 p-5 mt-5 font-bold text-xl text-white">
            CheckOut
          </button>
        </div>
        <div className=" m-10">
          <p className="text-xl text-gray-500 py-2">Have you any promocode? use it here</p>

          <div className="join">
            <div>
              <label className="input validator join-item">
               
                <input type="text" placeholder="killerNight" required />
              </label>
              
            </div>
            <button className="btn btn-neutral join-item w-40">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCart;
