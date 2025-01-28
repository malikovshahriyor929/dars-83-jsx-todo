import { useState } from "react";
import TodoList from "./todo-item";

const Todo = () => {
  const [list, setList] = useState("");
  const [data, setData] = useState([]);
  // edit
  const [editId, setEditId] = useState(null);

  let addTodo = (e) => {
    e.preventDefault();
    setData((preD) => [...preD, { list, id: Date.now() }]);
    setList("");
  };

  let deleteFunc = (id) => {
    let newData = data.filter((value) => value.id !== id);
    setData(newData);
  };
  let editFunc = (id, promtValue) => {
    data.filter((value) => {
      if (value.id === id) {
        let newData = data.map((value) =>
          value.id == id ? { ...value, list: promtValue } : value
        );
        setData(newData);
        setEditId(value.id);
      }
    });
  };

  return (
    <div className="m-auto w-[90%] py-5 ">
      <h1>Your todo list </h1>
      <form onSubmit={addTodo} className="flex items-center gap-2">
        <input
          value={list}
          onChange={(e) => setList(e.target.value)}
          type="text"
          className="border rounded-lg px-2 py-1 w-full "
          placeholder="typing..."
        />

        <button className="px-5 py-1.5">done</button>
      </form>
      <div className="py-4  flex flex-col gap-3">
        {data.map((value) => (
          <TodoList
            key={value.id}
            deleteFunc={deleteFunc}
            {...value}
            setEditId={setEditId}
            editId={editId}
            editFunc={editFunc}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
