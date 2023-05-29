import React, { useState } from "react";
import animation_img from "../../../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import ImageBase64 from "../../../Utility/ImageBase64";
import axios from "axios";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    image: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleUploadImage = async (e) => {
    const data = await ImageBase64(e.target.files[0]);
    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_DOMIN}/auth/signup`,
          data
        );

        console.log(response.data);

        toast(response.data.message);

        if (response.data.alert === true) {
          navigate("/login");
          e.target.reset();
        }
      } else {
        toast("Password And Confirm Password Not Equal");
      }
    } else {
      toast("Please Enter Required Fields");
    }
  };

  const handleOnchange = (e) => {
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
        {/* <h1 className="text-center text-2xl font-bold">Sign Up</h1> */}
        <div className="relative w-20 h-20 rounded-full drop-shadow-md shadow-md overflow-hidden m-auto">
          <img
            src={data.image ? data.image : animation_img}
            alt=""
            className="w-full h-full"
          />
          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-opacity-50 bg-slate-900 hover:bg-slate-500 duration-300 cursor-pointer w-full text-center">
              <span className="text-sm p-1 text-white ">Upload</span>
            </div>
            <input
              type="file"
              id="profileImage"
              className="hidden"
              accept="image/*"
              onChange={handleUploadImage}
            />
          </label>
        </div>

        <form className="w-full py-3" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full bg-slate-200 px-2 py-1 mt-1 mb-2 rounded focus-within:outline-blue-300"
            onChange={handleOnchange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full bg-slate-200 px-2 py-1 mt-1 mb-2 rounded focus-within:outline-blue-300"
            onChange={handleOnchange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="eamil"
            name="email"
            className="w-full bg-slate-200 px-2 py-1 mt-1 mb-2 rounded focus-within:outline-blue-300"
            onChange={handleOnchange}
          />

          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 px-2 py-1 mt-1 mb-2 rounded border-none  focus-within:outline-blue-300"
              onChange={handleOnchange}
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

          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full bg-slate-200 px-2 py-1 mt-1 mb-2 rounded border-none  focus-within:outline-blue-300"
              onChange={handleOnchange}
            />

            <span
              className="flex"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <BiShow className="absolute top-[10px] right-2 cursor-pointer text-xl"></BiShow>
              ) : (
                <BiHide className="absolute top-[10px] right-2 cursor-pointer text-xl"></BiHide>
              )}
            </span>
          </div>

          <button
            type="submit"
            className="w-full max-w-[120px] font-medium mt-4 text-white text-xl hover:bg-red-800 duration-300 rounded-full py-1 mx-auto bg-primary cursor-pointer flex justify-center"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm mt-3">
          Already have an account?{" "}
          <Link className="underline text-primary" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
