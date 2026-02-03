import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FaLock } from "react-icons/fa6";

import { MdOutlineMail } from "react-icons/md";

const SignUp = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full p-33 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-[#222]"
      >
        <h1 className="text-white text-3xl mt-10 font-medium">
       Sign up
        </h1>
        <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>
    
          <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <span>
              <CiUser />
            </span>{" "}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-none outline-none ring-0"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
   
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <span>
            <MdOutlineMail />
          </span>{" "}
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="border-none outline-none ring-0"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <span>
            <FaLock />
          </span>{" "}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-none outline-none ring-0"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="mt-4 text-left text-white">
          <button className="text-sm" type="reset">
            Forget password?
          </button>
        </div> */}
        <button
          type="submit"
          className="mt-2 w-full h-11 rounded-full text-white bg-[#333] hover:opacity-90 transition-opacity"
        >
        Sign up
        </button>
        <p
         
          className="text-gray-500 text-sm mt-3 mb-11"
        >
           Already have an account?
           <Link to="/login" className="text-white hover:underline">            click here
</Link>
         
        </p>
      </form>
    </div>
  );
};

export default SignUp;
