import { useState } from "react";

export default function OnChangeInput(){
    const [userInput, setUserInput] = useState(""); //초기값주어졌는데 빈칸으로하겠다.
    //input의 사용자 입력이 변경될때마다 userInput에 사용자 입력을 저장한다. 
    //입력받는건 두종류가있다. 1.state 2.reference 
    return (
        <div>
            <input type="text" onChange={e=>{
                console.log(e.target.value);//value라는 속성이있는데 그걸렌더링하는거다
                setUserInput(e.target.value);//userInput값이 사용자입력값으로 바뀔거고 함수재실행
            }} value={userInput} /> 
            {/* value고정하고싶을 때 쓰는거. 안써도 똑같 */}
            {/* 여기 윗줄 왜한거야 */}
            <br />
            입력된 글자: {userInput}
        </div>
    )
}