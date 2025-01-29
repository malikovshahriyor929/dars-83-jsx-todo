import React, { useState } from "react";

const TodoList = ({ list, id, deleteFunc, editFunc, setEditId, editId }) => {
  let [inputValue, setInputValue] = useState(list);
  return (
    <div className="w-full bg-red-700 rounded-lg p-2 flex items-center justify-between  ">
      <p>
        {editId == id ? (
          <input
            type="text"
            className="border rounded-lg px-2"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        ) : (
          list
        )}
      </p>
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
            className="p-1 px-2">
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

export default TodoList;
