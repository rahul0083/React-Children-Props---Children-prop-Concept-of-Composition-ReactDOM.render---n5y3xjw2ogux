import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
 //code here
 const [input1,SetInp1]=useState(0);
 const handler=(e)=>{
    let ans=e.target.value;
    ans = Math.pow(ans, 2);
    SetInp1(ans)
 }
//  const outputResult=()=>{
//   let ans=e.target.value;
//   ans = Math.pow(ans, 2);
//   SetInp1(ans)
//  }

  return (
    <div id="main">
    <ChildComponent input={<input id='input' onChange={handler}/>}  />
  
    <p id='output'>{input1}</p>
  </div>
  )
}


export default App;
