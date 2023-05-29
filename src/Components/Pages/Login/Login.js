import React, { useState } from "react";
import animation_img from "../../../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = data;

    if (email && password) {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_DOMIN}/auth/login`,
        data
      );

      toast(response.data.message);
      console.log(response.data);
      // e.target.reset();
    } else {
      toast("Please Enter Required Fields");
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white mx-auto flex flex-col p-4">
        {/* <h1 className="text-center text-2xl font-bold">Log In</h1> */}
        <div className="w-20 rounded-full drop-shadow-md shadow-md overflow-hidden m-auto">
          <img src={animation_img} alt="" className="w-full" />
        </div>

        <form className="w-full py-3" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="eamil"
            name="email"
            className="w-full bg-slate-200 px-2 py-1 mt-1 mb-2 rounded focus-within:outline-blue-300"
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 px-2 py-1 mt-1 mb-2 rounded border-none  focus-within:outline-blue-300"
              onChange={handleOnChange}
            />

            <span
              className="flex"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <BiShow className="absolute top-[10px] right-2 cursor-pointer text-xl"></BiShow>
              ) : (
                <BiHide className="absolute top-[10px] right-2 cursor-pointer text-xl"></BiHide>
              )}
            </span>
          </div>

          <button
            type="submit"
            className="w-full max-w-[120px] font-medium mt-4 text-white text-xl rounded-full py-1 mx-auto hover:bg-red-800 duration-300 bg-primary cursor-pointer flex justify-center"
          >
            Log In
          </button>
        </form>

        <p className="text-sm mt-3">
          Don't have account?{" "}
          <Link className="underline text-primary" to={"/signup"}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
