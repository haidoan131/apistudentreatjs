
import Hook1 from './hook/Hook1';
import Hook2 from './hook/Hook2';
import { useState } from 'react';
import Apibai1 from './hook/Apibai1';
import Hook3 from './hook/Hook3';
import "./app.css";
import Students from './components1/Students';
function App() {
  const [show,setShow]=useState(true)
  return (
    <div className="App">

    
{/*       
      {
        show?<Hook3/> :"not show hook1"
      }

      <button onClick={()=>setShow(!show)}>show</button> */}
      {/* <Apibai1/> */}
      <Students/>
    </div>
  );
}

export default App;
