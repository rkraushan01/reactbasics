import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

//let counter = 1500;
const incValue = () => {
  if(count<20){
    setCount(count+1);
  }
  else{
    alert("Cannot increase more");
  }
  
}
const decValue = () => {
  if(count>0){
    setCount(count-1);
  }
  else{
    alert("Cannot decrease more");
  }
  
}
  return (
    <>
     
       
    
      <h1>This counter project is using react</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={incValue} >Increase</button>
      <br />
      <br />
      <button onClick={decValue} >Decrease</button>
      
    </>
  )
}

export default App
