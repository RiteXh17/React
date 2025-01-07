import { useState } from "react";

function App() {
  const [color,setColor] = useState('olive');

  return (
    <div className="w-full h-screen duration-200" 
    style={{ backgroundColor: color }}>
       <div className="fixed flex flex-wrap justify-center 
       bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 shadow-xl
         bg-white px-3 py-2 rounded-3xl">
          <button onClick={ ()=> setColor("red")} 
          className="outline-none px-4 py-1 rounded-full"
          
          style={{backgroundColor: 'red'}} >Red</button>
          <button onClick={ ()=> setColor("Blue")}  className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: 'blue'}}>Blue</button>
          <button onClick={ ()=> setColor("Green")}  className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: 'green'}}>Green</button>
          <button onClick={ ()=> setColor("Purple")}  className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: 'purple'}}>Purple</button>
          <button onClick={ ()=> setColor("Violet")}  className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: 'violet '}}>Violet </button>
          <button onClick={ ()=> setColor("Yellow")} className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: 'Yellow'}}>Yellow</button>
          <button onClick={ ()=> setColor("Black")}  className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: 'black'}}>Black</button>
           <button onClick={ ()=> setColor("white")}  className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor: 'White'}}>white</button>
          
         </div>
       </div>
    </div>
  );
}

export default App;
