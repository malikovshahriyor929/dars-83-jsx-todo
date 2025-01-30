import React, { useEffect, useRef, useState } from "react";
let localData = JSON.parse(localStorage.getItem("data")) || [];

let count = 0;
if (count <= 0 || localData.length == 0) {
  localStorage.setItem("count", 0);
  count = 0;
}

let per = 0;

const TodoList = ({
  list,
  id,
  isActive: check,
  deleteFunc,
  editFunc,
  setEditId,
  editId,
  checkedList,
}) => {
  let [inputValue, setInputValue] = useState(list);

  return (
    <div className="w-full bg-red-700 rounded-lg p-2 flex items-center justify-between  ">
      <div className="flex items-center gap-2">
        <input
          className=" w-5 h-5"
          onChange={() => checkedList(id)}
          checked={check}
          type="checkbox"
        />
        <p>
          {editId == id ? (
            <input
              type="text"
              className="border rounded-lg px-2"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          ) : check ? (
            <del className=" opacity-50">{list}</del>
          ) : (
            list
          )}
        </p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => deleteFunc(id)} className="p-1 px-2">
          delete
        </button>
        {id == editId ? (
          <button
            onClick={() => {
              editFunc(id, inputValue);
              setEditId(null);
            }}
            className="p-1 px-2"
          >
            save
          </button>
        ) : (
          <button onClick={() => editFunc(id)} className="p-1 px-2">
            edit
          </button>
        )}
      </div>
    </div>
  );
};

export { TodoList };
