import { useState } from "react";
import json from "./data.json";

const List = ({ list }) => {
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.id} className="pl-8">
          {node.isFolder && (
            <span
              onClick={() =>
                setIsExpanded((prev) => ({
                  ...prev,
                  [node.name]: !prev[node.name],
                }))
              }
              className="cursor-pointer"
            >
              {isExpanded?.[node.name] ? "-" : "+"}
            </span>
          )}

          <span>{node.name}</span>
          {isExpanded?.[node.name] && node?.children && (
            <List list={node.children} />
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [data, setData] = useState(json);
  console.log(data);

  return (
    <div>
      <h1>File Explorer</h1>
      <List list={data} />
    </div>
  );
};

export default App;
