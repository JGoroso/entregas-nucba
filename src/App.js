import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const Title = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      {value}
      <button onClick={(e) => setValue(value + 1)}>+</button>
    </>
  );
};
// const Body = () => (
//   <>
//     <Title />
//     <Title />
//   </>
// );

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        HOLA COMO VA <br />
        <Title />
      </header>
    </div>
  );
}

export default App;
