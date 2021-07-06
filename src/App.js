import { useState, useEffect } from "react";
import "./App.css";

const App = () => {

  const [data, setData] = useState("");

  //FETCH
  const handlesFetch = async ()=>{
    const response = await fetch("https://tronalddump.io/random/quote"); // add api inside these brackets. Call it with var.dataYouWant
    const data = await response.json();
    setData(data);
  }
  ///HTML
  return (
    <div className="App">
      <div className="App-header">
        <h1>Donald Trump Meme Machine</h1>
        <p>{data.value}</p>
        <button onClick={handlesFetch}>Quote me Happy</button>
      </div>
    </div>
  )
}

export default App;
