import React from "react";

const Registration = () => {
  return (
    <div>
      <div className="flex justify-center p-10">
        <form
          //onSubmit={handleSubmit}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
          <p className="text-center text-2xl font-bold">Registration</p>

          <label className="label">Name</label>
          <input
            name="name"
            type="name"
            className="input"
            placeholder="Full Name"
          />

          <label className="label">Photo Url</label>
          <input
            name="photo"
            type="url"
            className="input"
            placeholder="photoURL"
          />

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
