import React from 'react';
import './App.css';
import {arraySum, arrayFilter, getUserNames} from "./utils";
import {personNames} from './task';

function App() {
    const array = [1, 2, 3, 4, 5];
    const usersArray = [
        {
            name: "Peter",
            surname: 'Jackson',
            age: 20,
        },
        {
            name: "Mary",
            age: "30",
        }
    ]
    const sum = arraySum(array);
    const filter = arrayFilter(array, item => item % 2 === 0);
    const userNamesArray = getUserNames(usersArray);

    return (
    <div className="App">
        <p>{sum}</p>
        <p>{filter.toString()}</p>
        <p>{userNamesArray.toString()}</p>
        {/*<p>{personNames.toString()}</p>*/}
    </div>
  );
}

export default App;
