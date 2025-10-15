import React, { useContext } from "react";

import { StoreContext } from "../../../Context/StoreContext";
import { assets } from "../../../assets/assets";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const { addCartItem, removeCartItem, cart, setCart } =
    useContext(StoreContext);

  const filtered = category=="All"? food_list: food_list.filter((food) => {
    return food.category === category;
  });

  console.log(filtered);
  return (
    <>
      <h1 className="text-2xl font-bold text-amber-600 w-11/12 mx-auto">
        Top Dissess
      </h1>
      <div className="grid grid-cols-4 mx-auto w-11/12 gap-x-5 gap-y-10">
        {filtered.map((item, index) => {
          return (
            <div className="space-y-2 shadow-lg rounded-2xl">
              <div className="overflow-hidden rounded-xl p-2 relative ">
                <img
                  src={item.image}
                  className="transition-transform duration-300 hover:scale-125 rounded-lg"
                  alt=""
                />
                <div className="absolute bottom-5 right-5 bg-amber-50 p-2 rounded-3xl">
                  {!cart[item._id] ? (
                    <img
                      className="w-8"
                      onClick={() => addCartItem(item._id)}
                      src={assets.add_icon_white}
                      alt=""
                    />
                  ) : (
                    <div className="flex items-center gap-2 font-semibold">
                      <img
                        className="w-7"
                        onClick={() => removeCartItem(item._id)}
                        src={assets.remove_icon_red}
                        alt=""
                      />
                      <p>{cart[item._id]}</p>
                      <img
                        className="w-7"
                        onClick={() => addCartItem(item._id)}
                        src={assets.add_icon_green}
                        alt=""
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="pl-4 pb-5 space-y-3">
                <h1 className="text-xl font-semibold pt-5">{item.name}</h1>
                <p className="text-lg text-gray-400">{item.description}</p>
                <p className="text-xl font-bold text-amber-600">
                  ${item.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FoodDisplay;
