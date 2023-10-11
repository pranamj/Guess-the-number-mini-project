import './App.css';

import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [guess, setGuessNumber] = useState(0);


  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const generateNumber = ()=>{
    setGuessNumber(Math.floor(Math.random() * 10)+1);
  }

  var success;


  if(guess===inputValue){
    success = true;
  }else {
    success = false;
  }


  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={generateNumber}>Generate Number</button>
      <p>You entered: {inputValue}</p>

      {success?"you win":"check"}



    </div>
  );
}



export default App;
