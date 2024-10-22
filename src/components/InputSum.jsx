// function addInput(event){
//     const input1 = Number(document.getElementById('userInput1').value);
//     const input2 = Number(document.getElementById('userInput2').value);
//     const result = input1 + input2;
//     console.log(result);
// }
// document.getElementById('userInput2').addEventListener('change', (event)=>{
//     addInput(event);
// })

import { useState } from "react";
export default function InputSum(){
    const [userInput, setUserInput] = useState("");
    const [userInput2, setUserInput2] = useState("");

    return (
        <div>
            <input type="text" onChange={e=>{
                setUserInput(Number(e.target.value));//userInput값이 사용자입력값으로 바뀔거고 함수재실행
            }} value={userInput} /> 
            {/* 여기 윗줄 왜한거야 */}
            <input type="text" onChange={e=>{
                setUserInput2(Number(e.target.value));//userInput값이 사용자입력값으로 바뀔거고 함수재실행
            }} value={userInput2} /> 
            <br />
            {userInput + userInput2}
        </div>
    )




}