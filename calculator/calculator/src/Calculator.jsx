import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleNumber = (value) => {
    setDisplay(display + value);
  };

  const handleOperator = (value) => {
    setDisplay(display + value);
  };

  const clear = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      const answer = eval(display);
      setDisplay(answer.toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>

      <input
        type="text"
        value={display}
        readOnly
      />

      <div className="buttons">

        {/* Row 1 */}
        <button onClick={clear}>C</button>
        <button onClick={() => handleOperator("/")}>÷</button>
        <button onClick={() => handleOperator("*")}>×</button>
        <button onClick={() => handleOperator("-")}>−</button>

        {/* Row 2 */}
        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button onClick={() => handleOperator("+")}>+</button>

        {/* Row 3 */}
        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>
        <button onClick={() => handleNumber("0")}>0</button>

        {/* Row 4 */}
        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>
        <button onClick={() => handleNumber(".")}>.</button>

        {/* Row 5 */}
        <button className="equal" onClick={calculate}>
          =
        </button>

      </div>
    </div>
  );
}

export default App;

