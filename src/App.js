import { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';
import * as math from 'mathjs';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  const[text,setText]=useState("");
  const[result,setresult]=useState("");

   const addToText=(val)=>
   {
    setText((text)=>[...text,val]);
   }
 
   const calculateResult =()=>
   {
    const input=text.join("");
    setresult(math.evaluate(input));
   }
   const reset=()=>
   {
   setText("");
   setresult("");
   }

  return (
    <div className="App">
        <div className="calc-wrapper">
          <Input text={text} result={result}/>
          <div className='row'>
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button symbol="9" handleClick={addToText}/>
          <Button color="red" symbol="/"  handleClick={addToText} />
          </div>
          <div className='row'>
          <Button symbol="4" handleClick={addToText}/>
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button color="red" symbol="*"  handleClick={addToText} />
          </div>
          <div className='row'>
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button color="red" symbol="+"  handleClick={addToText}/>
          </div>
          <div className='row'>
          <Button symbol="." handleClick={addToText}/>
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="="  handleClick={calculateResult}/>
          <Button color="red" symbol="-"  handleClick={addToText} />
          </div>
          <Button color="orange" symbol="clear" handleClick={reset}/>
        </div>
    </div>
  );
}

export default App;
