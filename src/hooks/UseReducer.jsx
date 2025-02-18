import React, { useEffect, useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
    // dispatch({ type: "COMPLETE", id: todo.id });

    switch (action.type) {
        case "COMPLETE":
          return state.map((todo) => {
            if (todo.id === action.id) {
              return { ...todo, complete: !todo.complete };
            } else {
              return todo;
            }
          });
          case "userinput":
          return state.map((todo) => {
            if (todo.id === action.id) {
              return { ...todo, complete: !todo.complete };
            } else {
              return todo;
            }
          });
        default:
          return state;
      }
};

const UseReducer = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [userInput, updateUserInput] = useReducer(reducer, 'ganesh');

//   useEffect(() => {
//     console.log(todos);
//     console.log(dispatch);
//     dispatch({ fir: "ganesh", last: "kanna" });
//   }, []);


  const handleComplete = (todo) => {
    console.log(todo)
    
    dispatch({ type: "COMPLETE", id: todo.id });
    updateUserInput({ type: "usernput", id: todo.id });
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default UseReducer;
