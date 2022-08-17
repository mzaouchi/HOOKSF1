import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';

function App() {
  const [show,setShow] = useState(false)
  return (
    <div>
      <h1>Workshop HOOKS</h1>
      <button onClick={()=>setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {
        show && <Counter/>
      }
      
    </div>
  );
}

export default App;
