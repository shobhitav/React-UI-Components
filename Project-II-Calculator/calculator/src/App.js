import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const operands = [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ["÷", "x", "–", "+", "="];
const action = ["0", "clear"];

const App = () => {
  return (
    <div className="app">
      <h1>Welcome to React Calculator</h1>
      <div>
        <CalculatorDisplay />
      </div>
      <div>
        <ActionButton buttonStyle="action" text={action[1]} />
        <NumberButton buttonStyle="operator" text={operators[0]} />
      </div>
      <div>
        <NumberButton buttonStyle="operand" text={operands[7]} />
        <NumberButton buttonStyle="operand" text={operands[8]} />
        <NumberButton buttonStyle="operand" text={operands[9]} />
        <NumberButton buttonStyle="operator" text={operators[1]} />
      </div>
      <div>
        <NumberButton buttonStyle="operand" text={operands[4]} />
        <NumberButton buttonStyle="operand" text={operands[5]} />
        <NumberButton buttonStyle="operand" text={operands[6]} />
        <NumberButton buttonStyle="operator" text={operators[2]} />
      </div>
      <div>
        <NumberButton buttonStyle="operand" text={operands[1]} />
        <NumberButton buttonStyle="operand" text={operands[2]} />
        <NumberButton buttonStyle="operand" text={operands[3]} />
        <NumberButton buttonStyle="operator" text={operators[3]} />
      </div>
      <div>
        <ActionButton buttonStyle="action" text={action[0]} />
        <NumberButton buttonStyle="operator" text={operators[4]} />
      </div>
    </div>
  );
};

export default App;
