import React, { useContext } from "react";

import { StoreContext } from "../../../Context/StoreContext";

const FoodDisplay = () => {
  const { food_list } = useContext(StoreContext);
  return (
    <>
      <h1 className="text-2xl font-bold text-amber-600 w-11/12 mx-auto">
        Top Dissess
      </h1>
      <div className="grid grid-cols-4 mx-auto w-11/12 gap-x-5 gap-y-10">
        {food_list.map((item, index) => {
          return (
            <div className="space-y-2">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  className="transition-transform duration-300 hover:scale-125"
                  alt=""
                />
              </div>
              <h1 className="text-xl font-semibold pt-5">{item.name}</h1>
              <p className="text-lg">{item.description}</p>
              <p className="text-lg font-bold">${item.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FoodDisplay;
