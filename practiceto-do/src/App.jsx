import { useState } from 'react'
 
import './App.css'

function App() {
  const [work,setwork] = useState('')
  const[works,setworks] = useState([])

  const handle=(work)=>{
     setwork(work.target.value)
  }

  const submit =()=>{
    if(work.trim()!==''){
      setworks([...works,work])
      setwork('')
    }
  }
  const deleteList =(index)=>{
      const updatedlist = works.filter((_,i)=>i!==index)
      setworks(updatedlist)
  }

  

  return (
    <>
      <h1>To-do-List</h1>
      <input type="text" value={work} onChange={handle}/>
      <button onClick={submit}>Submit</button>
      <ul>
        {works.map((task,index)=>(
               <li key={index}>{task} <button onClick={()=>deleteList(index)}>Delete</button></li>
       ) )}
        
      </ul>
     
    </>
  )
}

export default App
