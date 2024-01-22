import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Update = ({ display, update }) => {
  
  useEffect(() => {
    setInputs({ title: update.title, body: update.body });
  }, [update]);

  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = async () => {
    await axios
      .put(`http://localhost:3000/api/v2/updateTask/${update._id}`, inputs)
      .then(() => {
        toast.success("Your task has been updated");
      });
    console.log(inputs);
    display("none");
    return;
  };

  return (
    <div className="h-screen w-screen bg-slate-400 top-0 fixed ">
      <div className="flex flex-col h-screen container gap-8 justify-center  ">
        <input
          type="text"
          value={inputs.title}
          onChange={change}
          name="title"
          className="focus:bg-blue-200 resize-none rounded-md border-2 border-blue-500 border-solid p-2"
        />

        <textarea
          value={inputs.body}
          onChange={change}
          name="body"
          className="focus:bg-blue-200 resize-none rounded-md border-2 border-blue-500 border-solid p-2"
        />

        <div className="flex justify-between">
          <button
            className="middle none center rounded-lg py-2 px-6 font-sans text-sm  bg-blue-500 hover:bg-white text-white transition-all hover:text-blue-500 active:bg-blue-500/30 disabled:pointer-events-none border-solid border-2 border-blue-500 hover:border-blue-500 "
            data-ripple-dark="true"
            to="/logout"
            onClick={submit}
          >
            Update
          </button>

          <button
            className="middle none center rounded-lg py-2 px-6 font-sans text-sm  bg-blue-500 hover:bg-white text-white transition-all hover:text-blue-500 active:bg-blue-500/30 disabled:pointer-events-none border-solid border-2 border-blue-500 hover:border-blue-500 "
            data-ripple-dark="true"
            to="/logout"
            onClick={() => {
              display("none");
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
