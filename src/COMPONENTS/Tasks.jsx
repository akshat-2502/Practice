import React from "react";

function Tasks({ task, toggleComplete, deleteTask }) {
  return (
    <>
      {task.map((taskitems) => (
        <div
          key={taskitems.id}
          className="eachTask w-full h-[7vh] mt-5 mb-5 bg-zinc-600 rounded-lg px-4 py-3 flex justify-between items-center"
        >
          {/* ✅ Strike-through if completed */}
          <p
            className={`text-lg ${
              taskitems.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {taskitems.name}
          </p>

          <div className="taskAction flex items-center justify-between gap-5">
            <input
              type="checkbox"
              checked={taskitems.completed}
              onChange={() => toggleComplete(taskitems.id)}
              className="w-6 h-6 accent-green-500 border-2"
            />
            <button
              onClick={() => deleteTask(taskitems.id)}
              className="px-10 text-white hover:bg-red-600 py-2 bg-red-400 rounded-2xl"
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Tasks;
