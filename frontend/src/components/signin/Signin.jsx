import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

const Signin = () => {
  const dispatch = useDispatch(); 

  const history = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3000/api/v1/signin", inputs)
      .then((response) => {
        sessionStorage.setItem("id", response.data.others._id);
        dispatch(authActions.login());
        history("/todo");
      });
  };

  return (
    <div>
      <div className="container h-screen">
        <div className="grid grid-cols-2 pt-40">
          
          <div className="flex justify-center items-center text-center">
            <h1 className="text-5xl font-bold text-slate-600">
              Sign
              <br />
              In
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={inputs.email}
              onChange={change}
              className="focus:bg-blue-200 resize-none rounded-md border-2 border-blue-500 border-solid p-2"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={inputs.password}
              onChange={change}
              className="focus:bg-blue-200 resize-none rounded-md border-2 border-blue-500 border-solid p-2"
            />
            <button
              className="middle none center rounded-lg py-2 px-6 font-sans text-sm bg-blue-500 hover:bg-white text-white transition-all hover:text-blue-500 border-solid active:bg-blue-500/30 disabled:pointer-events-none border-2 border-blue-500 hover:border-blue-500"
              data-ripple-dark="true"
              onClick={submit}
            > 
              Signin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
