import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const history = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3000/api/v1/register", inputs)
      .then((response) => {
        if (response.data.message === "User already exists") {
          alert(response.data.message);
        } else {
          alert(response.data.message);
          setInputs({ email: "", username: "", password: "" });
          history("/signin")
        }
      });
  };

  return (
      <div className="container h-screen">
        <div className="grid grid-cols-2 pt-40">
          <div className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={change}
              value={inputs.email}
              className="focus:bg-blue-200 resize-none rounded-md border-2 border-blue-500 border-solid p-2"
            />
            <input
              type="username"
              name="username"
              placeholder="Enter your username"
              onChange={change}
              value={inputs.username}
              className="focus:bg-blue-200 resize-none rounded-md border-2 border-blue-500 border-solid p-2"

            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={change}
              value={inputs.password}
              className="focus:bg-blue-200 resize-none rounded-md border-2 border-blue-500 border-solid p-2"

            />
            <button
              className="middle none center rounded-lg py-2 px-6 font-sans text-sm bg-blue-500 hover:bg-white text-white transition-all hover:text-blue-500 active:bg-blue-500/30 disabled:pointer-events-none border-solid border-2 border-blue-500 hover:border-blue-500"
              data-ripple-dark="true"
              onClick={submit}
            >
              Signup
            </button>
          </div>
          <div className="flex justify-center items-center text-center">
            <h1 className="text-5xl font-bold text-slate-600">
              Sign
              <br />
              Up
            </h1>
          </div>
        </div>
      </div>
  );
};

export default Signup;
