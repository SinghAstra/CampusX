import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="flex bg-black w-full h-screen font-mono">
      <div className="flex-1 flex items-center justify-center w-full h-screen flex-col">
        <div className="w-4/5 mb-6">
          <h1 className="text-2xl font-bold text-violet-500">Welcome back</h1>
        </div>
        <form className="w-4/5 flex flex-col gap-3">
          <input
            className="w-full h-10 bg-transparent text-white font-mono outline outline-0 focus:outline-0 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] focus:border-violet-400"
            placeholder="Username"
            type="text"
          />
          <input
            className="w-full h-10 bg-transparent text-white font-mono outline outline-0 focus:outline-0 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] focus:border-violet-400"
            placeholder="Password"
            type="password"
          />
          <button class="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 border border-violet-700 rounded w-full mt-3">
            Log In
          </button>
        </form>
        <div className="w-4/5 text-right mt-3">
          <Link to="/sign-up">
            <p className="text-base hover:text-violet-400 cursor-pointer hover:underline text-white">
              New User ? Sign Up
            </p>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={"/images/log-in.svg"} alt="Log In" />
      </div>
    </div>
  );
};

export default LogIn;
