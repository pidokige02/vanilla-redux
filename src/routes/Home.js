import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";


function Home() {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  const dispatch = useDispatch();
  function onSubmit(e) {
    e.preventDefault();
    dispatch(actionCreators.addToDo( text ))
    setText("");
  }
  const toDos = useSelector((state) => state);

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}


export default Home;
