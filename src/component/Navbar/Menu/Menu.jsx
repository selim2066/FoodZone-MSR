import { menu_list } from "../../../assets/assets";

const Menu = ({ setCategory, category }) => {
  return (
    <>
    <>
  <div className="w-11/12 mx-auto space-y-3">
    <div className="content">
      <h1 className="text-2xl font-bold text-amber-500">Explore Menu</h1>
      <p className="italic text-amber-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolor.
      </p>
    </div>

    {/* Menu Photo Section */}
    <div
      className="
        flex justify-start md:justify-around items-center text-center gap-6 pt-5
        overflow-x-auto scrollbar-hide scroll-smooth
      "
    >
      {menu_list.map((item, index) => (
        <div
          key={index}
          onClick={() =>
            setCategory((prev) =>
              prev === item.menu_name ? "All" : item.menu_name
            )
          }
          className="flex-shrink-0" // 👈 Keeps each item fixed in width when scrolling
        >
          <div>
            <img
              className={`cursor-pointer w-20 sm:w-24 transition-all duration-300 ${
                category === item.menu_name
                  ? "rounded-full outline-4  outline-amber-600"
                  : ""
              }`}
              src={item.menu_image}
              alt={item.menu_name}
            />
          </div>
          <h3 className="font-semibold text-amber-800">{item.menu_name}</h3>
        </div>
      ))}
    </div>
  </div>

  <hr className="shadow-2xl w-11/12 mx-auto border-gray-400 mt-5" />
</>

    </>
  );
};

export default Menu;
