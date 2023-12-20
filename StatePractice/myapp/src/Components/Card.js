import "./Card.css";
import { useState } from 'react';
let flag=true;
export default function Card(props) {
 
  let [name, setName]=useState("");
    function changeName(){
      if(flag){
        setName(props.name);
        console.log("if");
        flag=false;
    }else{
      setName("SAHU");
      console.log("else");
      flag=true;
    }
    }

  return (
    <div className="cardContainer" style={{margin:"20px", padding:"20px"}}>
      <div className="text">
        <div className="name" style={{display:"flex", alignItems:"center"}}>
          <label htmlFor="">Name:</label>
          <p>{name}</p>
        </div>
        <div className="address">
          <label htmlFor="">Address:</label>
          <p>{props.address}</p>
        </div>
      </div>
      <div className="btns">
        <button onClick={changeName}>Change Name</button>
        <button>Change address</button>
      </div>
    </div>
  );
}
