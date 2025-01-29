import { useState } from "react";
import TodoList from "./todo-item";

const Todo = () => {
  const [list, setList] = useState("");
  const [data, setData] = useState([]);
  const [searchdata, setSearchData] = useState([]);
  // edit
  const [editId, setEditId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  let localData = JSON.parse(localStorage.getItem("data")) || [];

  let addTodo = (e) => {
    e.preventDefault();
    setData((preD) => [...preD, { list, id: Date.now() }]);
    localStorage.setItem(
      "data",
      JSON.stringify([...localData, { list, id: Date.now() }])
    );
    setList("");
  };

  let deleteFunc = (id) => {
    let newData = localData.filter((value) => value.id !== id);
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };
  let editFunc = (id, promtValue) => {
    localData.filter((value) => {
      if (value.id === id) {
        let newData = localData.map((value) =>
          value.id == id ? { ...value, list: promtValue } : value
        );
        setData(newData);
        localStorage.setItem("data", JSON.stringify(newData));

        setEditId(value.id);
      }
    });
  };
  let search = (e) => {
    e.preventDefault();
    // console.log(searchValue);
    let newdata = localData.filter((value) => value.list.includes(searchValue));
    setSearchData(newdata);

    if ("") {
    }
  };
  // console.log(value);

  return (
    <div className="m-auto w-[90%] py-5 ">
      <h1>Your todo list </h1>

      <form onSubmit={search} className="flex items-center gap-2 py-3">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          className="border rounded-lg px-2 py-1 w-full "
          placeholder="search your todo"
        />

        <button className="px-5 py-1.5">done</button>
      </form>
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
        {(searchValue ? searchdata : localData).map((value) => (
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
