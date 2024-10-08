"use client";

import CustomInput from "@/app/components/CustomInput";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {try {
    const response = await axios.post('http:localhost:8000',
      {
          email:email,
          password: password
    },
    {
      headers:{
        "Content-Type": "Application/json"
      }
    })
    const token= response.data.token;
    Cookies.set("token",token);
    
  } catch (error) {
    console.error(error)
  }
  }
  
  return (
    <div className="bg-white border-double rounded-2xl border-4 h-90 w-[550px] justify-center ml-80 mt-20">
      <form
        action="html"
        className=" w-[600px] py-6 -ml-6 flex justify-center flex-col items-center "
      >
        <br />
        <CustomInput
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <br />
        <CustomInput
          label="Password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <div className="flex">
          <label htmlFor="rememberMe" className="mt-4 mr-4">
            <span className="hover:bg-blue-500">Remember me?</span>
          </label>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            className="mt-4"
          />
        </div>

        <input
          type="submit"
          value="Login"
          className="mt-12 border-none w-32 p-1 rounded-2xl bg-blue-600 text-white text-center"
        ></input>
      </form>
    </div>
  );
};

export default Login;
