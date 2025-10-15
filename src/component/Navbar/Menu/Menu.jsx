import React from "react";
import { menu_list } from "../../../assets/assets";


const Menu = () => {
  return (
    <div className="w-11/12 mx-auto space-y-3">
      <div className="content">
        <h1 className="text-2xl font-bold text-amber-500">Explore Menu</h1>
        <p className="italic text-amber-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolor.
        </p>
      </div>
      {/* menuphoto */}
      <div className="flex text-center gap-3 pt-5">
        {menu_list.map((item, index) => {
          return (
            <div className="">
              <div>
                <img src={item.menu_image} alt="" />
              </div>
              <h3 className="font-semibold text-amber-800">{item.menu_name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
