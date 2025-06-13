import { useState } from "react";
import json from "./data.json";

const List = ({ list }) => {
  return (
    <div className="container">
      {list.map((node) => (
        <div className="pl-8">
          <span key={node.id}>{node.name}</span>
          {node?.children && <List list={node.children} />}
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
