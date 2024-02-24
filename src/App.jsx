import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 //let count=0
let [count,setCount]=useState(0)

 let handleBtn=()=>{
count++
setCount(count)
console.log(count)

 }

  return (
    <>
     
      <h1>{count}</h1>
      <button onClick={handleBtn}>CLICK ME</button>
      
    </>
  )
}

export default App
