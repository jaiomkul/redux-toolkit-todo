import { useState } from "react";
import TodoItem from "./TdodoItem";
import { useSelector, useDispatch, Provider } from "react-redux";
import { addTodo, removeTodo } from "../redux/todoSlice";
import store from "../redux/store";

function TodoData() {
  const [input, setInput] = useState("");

  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <Provider store={store}>
      <div className="">
        <h1>TODO List</h1>
        <form className="" onSubmit={handleAddTodo}>
          <input type="text" onInput={(e) => setInput(e.target.value)} />

          <button type="submit">Add</button>
        </form>
        <div className="">
          {count > 0 &&
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                id={todo.id}
                onCheck={handleTodoDone}
              />
            ))}

          {count === 0 && <p>No todos</p>}
        </div>
      </div>
    </Provider>
  );
}

export default TodoData;
