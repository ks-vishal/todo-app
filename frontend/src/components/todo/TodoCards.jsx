import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdAutorenew } from "react-icons/md";

const TodoCards = ({
  title,
  body,
  id,
  delid,
  display,
  updateId,
  toBeUpdate,
}) => {
  return (
    <div class="flex flex-col gap-3 border-solid border-2 border-slate-500 px-4 py-3">
      <h5 className="text-slate-500 font-bold text-lg">{title}</h5>
      <p className="text-slate-500">{body.split("", 77)}...</p>
      <div class="flex justify-between ">
        <div
          class="flex justify-center items-center cursor-pointer"
          onClick={() => {
            display("block");
            toBeUpdate(updateId);
          }}
        >
          <MdAutorenew color="green"/>&nbsp;<p className="text-green-700">Update</p>
        </div>
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={() => {
            delid(id);
          }}
        >
          <AiFillDelete color="red"  />&nbsp;<p className="text-red-700">Delete</p>
        </div>
      </div>
    </div>
  );
};

export default TodoCards;
