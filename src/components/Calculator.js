import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    next: 0,
    total: 0,
    operation: null,
  });

  const clickHandler = (e) => {
    const result = calculate(state, e.target.value);

    setState({
      next: result.next,
      total: result.total,
      operation: result.operation,
    });
  };

  return (
    <div className="calculator">
      <div className="screen">{state.next || state.total || 0}</div>
      <div className="row">
        <button type="button" onClick={clickHandler} value="AC" className="gray">AC</button>
        <button type="button" onClick={clickHandler} value="+/-" className="gray">+/-</button>
        <button type="button" onClick={clickHandler} value="%" className="gray">%</button>
        <button type="button" onClick={clickHandler} value="÷" className="orange">&#247;</button>
      </div>
      <div className="row">
        <button type="button" onClick={clickHandler} value="7" className="gray">7</button>
        <button type="button" onClick={clickHandler} value="8" className="gray">8</button>
        <button type="button" onClick={clickHandler} value="9" className="gray">9</button>
        <button type="button" onClick={clickHandler} value="x" className="orange">x</button>
      </div>
      <div className="row">
        <button type="button" onClick={clickHandler} value="4" className="gray">4</button>
        <button type="button" onClick={clickHandler} value="5" className="gray">5</button>
        <button type="button" onClick={clickHandler} value="6" className="gray">6</button>
        <button type="button" onClick={clickHandler} value="-" className="orange">-</button>
      </div>
      <div className="row">
        <button type="button" onClick={clickHandler} value="1" className="gray">1</button>
        <button type="button" onClick={clickHandler} value="2" className="gray">2</button>
        <button type="button" onClick={clickHandler} value="3" className="gray">3</button>
        <button type="button" onClick={clickHandler} value="+" className="orange">+</button>
      </div>
      <div className="row">
        <button type="button" onClick={clickHandler} value="0" className="zero gray">0</button>
        <button type="button" onClick={clickHandler} value="." className="gray">.</button>
        <button type="button" onClick={clickHandler} value="=" className="orange">=</button>
      </div>
    </div>
  );
};

export default Calculator;
