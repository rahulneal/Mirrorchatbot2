import './App.css';

import logo from "./image/bot (2).png"
import applogo from "./image/bot.png"

import React, { useState } from 'react';


function App() {
  // const[inputref]=React.useRef(null)
  // // const[msg,setMsg]=React.useState(["hi how i can help you today?"])
  // function sendmsg(){
  //   // if(inputref.value>0){

  //   //   setMsg(prev=>[...prev,inputref.current.value])
  //   //   console.log(msg)
  //   // }                  


  // }
  const [name, setName] = useState("");
  const [msgarr,setMsgArr]=useState([ ])

  const handle = () => {
     
    localStorage.setItem('Name', name);
    console.log(name)
    setName(" ")
    setMsgArr(prev=>[...prev,name])
    console.log(msgarr)

 };

  return (
    <div className="App">
      <div className="main">
        
        
      <h1>Hii....</h1>
          <h2>I m Frioo The Mirror Bot</h2>
          <small>Just Ask me anything i will repicate your Emotion!</small>
        <div className="App-logo">
         
          <img src={applogo} alt="applogo" width="80px"/>
          
          </div>

        <div className="chatbox__container">
          <div className="header__logo">
            
            <img src={logo} alt="bot"/>
            <h3>Frioo</h3>
          </div>
          <div style={{height:"50vh"}}>
          {localStorage.getItem('Name') &&
           msgarr.map(item=><div ><p style={{position:'absolute',left:"10px"}} >{item}</p>
           <p style={{color:"black",paddingLeft:"14rem",paddingTop:"-2rem"}} >{item}</p></div>           )
         }

          </div>
         


          <div className="input__bar">
            
            <input placeholder="Ask me!" size="32" 
               onChange={(e) => setName(e.target.value)}
               value={name}></input>
            <button onClick={handle} >➡️</button>
            </div>
        </div>
        

      </div>
     
    </div>
  );
}

export default App;
