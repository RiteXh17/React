import { useState } from 'react'
 
 
import './App.css'

function App() {
  
  const [num, setnum] = useState(0)
  
  const numberChange = () =>{

    if(num<100){
      setnum((prev)=>prev+ 1 )
    } else {
      alert("Stop Now ")
    }

    
  }

  const decrease =()=>{
   if(num>0){
    setnum((prev)=> prev - 1)
   } else {
    alert("Minimum limit reached")
   }

     
  }
  const changeInput = (e) => {
    const value = e.target.value;
    setnum(value === "" ? 0 : parseInt(value));  

    
  };

  const reset =()=>{
    setnum(0)
  }


  return (
    <>
      <h1>Increase number : {num}</h1>
      <input type="text" value={num} onChange={changeInput}/><br />
      <button onClick={numberChange}>Increase</button>
      <button onClick={decrease}>Decrease </button>
      <button onClick={reset}>Reset</button>

    </>
  )
}

export default App
