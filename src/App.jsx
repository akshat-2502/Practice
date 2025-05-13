import { useState } from "react";
import Tasks from "./COMPONENTS/Tasks";

function App() {
  const [task, setTask] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const taskHandler = () => {
    const newTask = {
      id: Date.now(),
      name: inputTask,
      completed: false,
    };
    setTask([...task, newTask]);
    setInputTask("");
  };
  const deleteTask = (id) => {
    const updatedTasks = task.filter((taskItem) => taskItem.id !== id);
    setTask(updatedTasks);
  };

  const toggleComplete = (id) => {
    const updatedTask = task.map((tasks) => {
      return tasks.id === id
        ? { ...tasks, completed: !tasks.completed } // Corrected this line
        : tasks;
    });
    setTask(updatedTask);
  };
  //comment for git

  return (
    <>
      <div className="w-full h-screen bg-zinc-900 ">
        <div className="text-white text-center pt-25 ">
          <h1 className="text-6xl">TO-DO</h1>
        </div>
        <div className="flex justify-center items-center mt-20 gap-4">
          <input
            className="border-1  bg-zinc-800 border-blue-500 px-5 py-2 rounded-2xl text-white w-100 outline-none"
            type="text"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
            placeholder="Enter Task ..."
          />
          <button
            onClick={taskHandler}
            className="px-10 text-white hover:bg-blue-600 py-2 bg-blue-500 rounded-2xl"
          >
            ADD
          </button>
        </div>

        <div className="tasks px-30 mt-15 text-white ">
          <Tasks
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
