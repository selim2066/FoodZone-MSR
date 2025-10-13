import React from "react";

const Header = () => {
  return (
    <>
      <div
        className="hero h-[70vh]  w-11/12 mx-auto flex items-center justify-center bg-white"
        style={{
          backgroundImage: "url(public/header_img.png)",
          backgroundSize: "contain",
          backgroundRepeat:"no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-1">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-white text-black rounded-3xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
