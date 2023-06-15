
import React,{useState} from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  const [action, setAction] = useState(false);
  return (
    <div>
        <button onClick={() => setAction(true)}>Show Modal</button>
        <Child  show={action} onClose={setAction} />
    </div>
  )
}

export default App
