import './Counter.css'
import {useState} from 'react'
export default (props)=>{
    // let count=0;
    let updatedValue=0;
    let [count, setCounter]=useState(0);
    function increaseCount(){
        
        if(count<10){
         updatedValue=count+1;
        setCounter(updatedValue);
        props.increasecartCount(updatedValue);
    }
   
    }
    function decreaseCount(){
        if(count>0)
        updatedValue=count-1;
        setCounter(updatedValue);
        props.increasecartCount(updatedValue);
    }
    return(
    <div className="counter">
        <button onClick={decreaseCount}>Decrease</button>
        <p>count:{count}</p>
        <button onClick={increaseCount}>Increase</button>
    </div>);
}