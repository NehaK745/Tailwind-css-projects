import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  return (
    <div className="flex flex-col from-blue-600 via-teal-500 to-purple-500 bg-gradient-to-r h-screen items-center justify-center">
      <h1 className="p-4 font-bold text-2xl">Todo list 📝</h1>
      <input
        className="p-2 border-2 border-gray-600 "
        type="text"
        placeholder="Add Your todo"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 mt-1 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded-md shadow-sm focus:outline-none focus:shadow-outline"
      >
        Add Task
      </button>
      <ul className="p-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="p-2 m-2 bg-green-800 grid gap-4 grid-cols-2 border-gray-600 text-white font-bold text-xl"
          >
            {todo}
            <button onClick={() => setTodos(todos.filter((todo, i) => i !== index))}
             className="bg-red-400 hover:bg-red-800 ">X</button>
           
          </li>
          
        ))}
      </ul>
      
    </div>
  );
}

export default App;
