import { useState } from "react";
import Counter from "./components/Counter";
import Greetings from "./components/Greetings";

import "./App.css"; // this is how you do css files
//import Lodash from 'lodash'  //don't need this path because

function App() {
  //state
  let [count, setCount] = useState(0);
  let [name, setName] = useState("Shalom");

  const addCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="container">
        <Counter count={count} />
        <Greetings name={name} />
        <button onClick={addCount}>Click here to add to count</button>
        <button onClick={minusCount}>Click here to munis from count</button>
        <button onClick={resetCount}>Click here to reset count</button>
      </header>
    </div>
  );
}

export default App;
