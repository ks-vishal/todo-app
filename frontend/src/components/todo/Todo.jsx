import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import "./Todo.css";
import TodoCards from "./TodoCards";
import Update from "./Update";

let id = sessionStorage.getItem("id");
let toUpdateArray = [];

const Todo = () => {
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [array, setArray] = useState([]);

  const update = (value) => {
    console.log(array[value]);
    toUpdateArray = array[value];
  };

  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = async () => {
    if (inputs.title === "" || inputs.body === "") {
      toast.error("title or body is empty");
      return;
    } else {
      if (id) {
        await axios
          .post("http://localhost:3000/api/v2/addTask", {
            title: inputs.title,
            body: inputs.body,
            id: id,
          })
          .then((response) => {
            console.log(response);
          });

        setArray([...array, inputs]);
        setInputs({ title: "", body: "" });
        toast.success("your tast is added");
        return;
      } else {
        setArray([...array, inputs]);
        setInputs({ title: "", body: "" });
        toast.success("your tast is added");
        toast.error("your tast is not saved please login");
        return;
      }
    }
  };

  const del = async (cardid) => {
    if (id) {
      await axios
        .delete(`http://localhost:3000/api/v2/deleteTask/${cardid}`, {
          data: { id: id },
        })
        .then(() => {
          toast.success("your tast is deleted");
        });
      return;
    } else {
      toast.error("Please signup first");
      return;
    }
  };

  const dis = (value) => {
    document.getElementById("todo-update").style.display = value;
  };
  useEffect(() => {
    if (id) {
      const fetch = async () => {
        await axios
          .get(`http://localhost:3000/api/v2/getTask/${id}`)
          .then((response) => {
            setArray(response.data.list);
          });
      };
      fetch();
    } else {
      toast.error("Please signup first");
    }
  }, [submit]);

  return (
    <>
      <div className="container h-screen pb-8">
        <ToastContainer />
        <div className="flex flex-col justify-center items-center gap-4 pt-8">
          <div className="flex flex-col justify-center gap-4 border-solid border-2 border-blue-500 rounded-md py-2 px-4 w-2/4 ">
            <input
              type="text"
              placeholder="title"
              onClick={show}
              name="title"
              value={inputs.title}
              onChange={change}
              // className="focus:bg-blue-200"
            />
            <textarea
              id="textarea"
              type="text"
              placeholder="body"
              name="body"
              value={inputs.body}
              onChange={change}
              className="resize-none"
            />
          </div>

          <div className="">
            <button
              className="middle none center rounded-lg py-2 px-6 font-sans text-sm bg-blue-500 hover:bg-white text-white transition-all hover:text-blue-500 active:bg-blue-500/30 disabled:pointer-events-none border-2 border-blue-500 hover:border-blue-500"
              data-ripple-dark="true"
              onClick={submit}
            >
              Add
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-12">
          {array &&
            array.map((item, index) => (
              <div key={index}>
                <TodoCards
                  title={item.title}
                  body={item.body}
                  id={item._id}
                  delid={del}
                  display={dis}
                  updateId={index}
                  toBeUpdate={update}
                />
              </div>
            ))}
        </div>
      </div>

      <div id="todo-update" className="hidden">
        <Update display={dis} update={toUpdateArray} />
      </div>
    </>
  );
};

export default Todo;
