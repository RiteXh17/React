import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [celcius,setcelcius] =useState("")
  const [fera,setfera] = useState("")

   const celciushandle =(e)=>{
      const value = Number(e.target.value)
      setcelcius(value)
      const farenite = (value * 9/5)+32
      setfera(farenite)
   }

   const farehandle =(e)=>{
    const value = Number(e.target.value)
    setfera(value)
    const celcius = (value - 32) * 5/9
    setcelcius(celcius)
 }


 const handle = () => {
  if (celcius === "" || fera === "") {
    alert("Please fill in both fields");
  } else {
    alert(`Celsius: ${celcius}, Fahrenheit: ${fera}`);
    setcelcius('')
    setfera('')
  }
};
  


  return (
    <>
        <h1>Temperature Celcius to Feranite</h1>
        Celcius :<input type="number" value={celcius || ""} onChange={celciushandle}/><br />
        Fera : <input type="number" value={fera || ""} onChange={farehandle}/> <br />
        <button onClick={handle}>Submit</button>
    </>
  )
}
export default App
