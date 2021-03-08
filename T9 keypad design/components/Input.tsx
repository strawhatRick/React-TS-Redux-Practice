import { count } from 'console';
import { type } from 'os';
import React, { useState } from 'react';
// const arr = [['a', 'b', 'c', '2'], ['d', 'e', 'f', '3'], ['g', 'h', 'i', '4'], ['j', 'k', 'l', '5'], ['m', 'n', 'o', '6'], ['p', 'q', 'r', 's', '7'], ['t', 'u', 'v', '8'], ['w', 'x', 'y', 'z', '9'], ['0', '.'], ['1', ',', '?', '!']];
const arr = ['a', 'b', 'c', '2'];
let firstClick: boolean = true;
let clickTime: number, prevClickTime: number, timeDiff: number;
let value="";
function changeValue(value: any, counter: any): string {
    
    value = value+arr[counter%arr.length];
    return value;
}
export const Input = () => {
    const [counter, setCounter] = useState(0);
    const [render, forceit] = useState(true);
    console.log("Re-render?");
    const handleClick = () => {
        clickTime = performance.now();
        // console.log("curr : " + clickTime);
        // console.log("prev : " + prevClickTime);
        if (!firstClick && ((clickTime - prevClickTime) < 1000)) {
            // setState functions are async.
            // setCounter((prevCounter) => (prevCounter+1));
            setCounter(counter+1);
            console.log(counter);
             
        } else {
            setCounter(0);
            forceit(!render);
        }
        value = changeValue(value, counter);
        console.log("counter: " + counter);
        console.log("value: " + value);
        prevClickTime = clickTime;
        firstClick = false;
    }
    return (
        <>
            <div>Input: {value} </div>
            {/* <input value={value} onChange={(e) => {setValue(e.target.value)}}/> */}
            <button onClick={()=>handleClick()}><h4>{arr[3]}</h4>{arr[0]} ,{arr[1]} ,{arr[2]}</button>
        </>
    )
}