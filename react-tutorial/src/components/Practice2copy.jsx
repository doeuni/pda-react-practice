//연습문제 2
//금지어 사전 만들기 : 사용자로부터 input을 입력에 받아 Add버튼을 클릭하면 금지어가 추가되도록 작성
// 금지어는 실시간으로 화면에 렌더링.
// 사용자로부터 입력받아 금지어 필터링 하기 
// - input태그를 하나 만들고 사용자로부터 입력을 받아, 화면 아래에 렌더링 하시오. 
// - (입력받은 글자에 금지어가 포함되어 있으면, 해당 부분을 **로 표시)

import { useState } from "react";

export default function Practice2() {
  const [userInput, setUserInput] = useState("");
  const [userInput2, setUserInput2] = useState("");
  const [inputArray, setInputArray] = useState([]);
  const [inputArray2, setInputArray2] = useState([]);

/* /**
* 1. 사용자 입력시 사용자 입력한 내용 보이기 (상태 저장)
* 2. 사용자 입력완료 후 버튼 클릭시, inputArray2에 넣기
*    2-1. 금지어가 있을 경우, 금지어는 **로 변경
*    2-2. 금지어가 없을 경우 추가.
*/    
//   const filtering = (target) => {
//     for (let userInput of inputArray2) {
//       console.log("filtered", userInput);
//       target = target.replace(userInput, "**");
//     }
//     return setTargetStr(target);
//   };

  const filtering = (target)=>{
    for (let userInput of inputArray) {
        console.log("filtered", userInput);
        target = target.replace(userInput, "**");
      }
      return target 
  }



  

  return (
    <div>
      금지어입력
      <input
        type="text"
        onChange={(e) => {
          setUserInput(e.target.value); //userInput값이 사용자입력값으로 바뀔거고 함수재실행
        }}
        value={userInput}
      />
      <button
        onClick={() => {
          setInputArray([...inputArray, userInput]);
          setUserInput("");
        }}
      >
        추가
      </button>


      사용자입력
      <input type="text"
      onChange={(e) => {
        setUserInput2(e.target.value);
        // filtering(e.target.value);
      }}value={userInput2}/>
  
      <button
        onClick={() => {

            const filteredTarget = filtering(userInput2);
            setInputArray2([...inputArray2, filteredTarget]);
        }}
      >
        추가
      </button>
      
      <br />
      {inputArray2}
      
      <div>
        <ul>
          {/* "배열"렌더링은 간단하다 . 중괄호. 해당배열쩜 */}

          {inputArray.map((el, i) => {
            return (
              <li key={i}>
                {/* //반복돌때는 키값이 있는걸 기대한다. 반복돌아서리턴값모아새배열반환.  */}
                {el}
              </li>
            );
          })}
        </ul>
        <ul>
          {/* "배열"렌더링은 간단하다 . 중괄호. 해당배열쩜 */}

          {inputArray2.map((el, i) => {
            return (
              <li key={i}>
                {/* //반복돌때는 키값이 있는걸 기대한다. 반복돌아서리턴값모아새배열반환.  */}
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
