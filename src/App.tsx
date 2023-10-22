import React from 'react';
import './App.css';
import {arraySum, arrayFilter, arrayMap} from "./utils";

function App() {
    const array = [1, 2, 3, 4, 5];
    const strArray = ['one', 'two', 'three'];
    const sum = arraySum(array);
    const filter = arrayFilter(array, item => item % 2 === 0);
    const map = arrayMap(array, item => item * 2);
    const mapStr = arrayMap(strArray, item => item + '-potato');

  return (
    <div className="App">
        <p>{sum}</p>
        <p>{filter.toString()}</p>
        <p>{map.toString()}</p>
        <p>{mapStr.toString()}</p>
    </div>
  );
}

export default App;
