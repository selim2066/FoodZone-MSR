import React from "react";
import {motion} from "framer-motion"

const Header = () => {
  return (
    <>
      <div
        className="hero h-[34vw] w-11/12 mx-auto  rounded-lg flex items-center mt-3 justify-center bg-white relative"
        style={{
          backgroundImage: "url(public/header_img.png)",
          backgroundSize: "contain",

          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        <motion.div className="hero-content text-neutral-content absolute bottom-[10%] left-[1.5vw] w-1/2"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}>
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Order Your Fav Food</h1>
            <p className="mb-1">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
            <button className="btn bg-white text-black mt-2 rounded-3xl">
              Order Now
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
