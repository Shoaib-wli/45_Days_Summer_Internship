// import logo from './logo.svg';
// import Properties from './COMPONENT/properties';
// import './App.css';
// import Properties from "./COMPONENT/NewFile";
import React from "react";
// import NewFile from "./COMPONENT/NewFile"

import Form from "./COMPONENT/form";
function App() {
  // const person={
  //   Myname:'Shoaib ali',
  //   age:'23',
  //   email:"abc",
  // }
  return (
    <div className="App">
      {/* < Properties firstName='shoaib  ' lastName='Ali'/><br></br>
      < Properties firstName1='shivam ' lastName1='Kumar' /><br></br>
      < Properties firstName2='shyam  ' lastName2='Singh' /><br></br> */}
      {/* <Properties myName='shoaib ' age='ali ' email='db'/> */}
      {/* <Properties {...person}/> */}
      {/* {<h1>COMPLETE PROJECT</h1>} */}
      {/* {
        <Properties/>
      } */}
      <Form/>

      {/* <NewFile/> */}
    </div>
  );
}

export default App;