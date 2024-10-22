import { useState } from 'react';

export default function WordFilter() {
  const [userInput, setUserInput] = useState('');
  const [userInput2, setUserInput2] = useState('');
  const [userInputArr, setUserInputArr] = useState([]);
  const [userInputArr2, setUserInputArr2] = useState([]);

  return (
    <>
      <input
        type="text"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <p>
        {userInputArr.map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      </p>
      <button
        onClick={() => {
          setUserInputArr([...userInputArr, userInput]);
          setUserInput('');
          console.log(userInputArr);
        }}
      ></button>
      <input type="text" value={userInput2} onChange={(e) => setUserInput2(e.target.value)} />
      {/* input위에게 변하는거 니까 onChange로두고 글씨적는게 이벤트 .userInput값을바꾸려면 쓸 수 있는게 setUserInput밖에 */}
      {/* 없음. 이걸바꾸려면 setUserInput 뒤에값이 업데이트되는값 */}
      <button
        onClick={() => {
          //버튼 크릭했을때 배열에 값을 저장해야하는데 저장하려면 원래요소들어잇는배열 + 새로운인풋
          //값을 업데이트하기위해서 set~~~를 써야함
          //userInput2 안에 내가 쓴 문장이 있어
          //replace 나쁜말과 욕은 안되요
          let tmp = userInput2;
          for (let f in userInputArr) {
            console.log(tmp.replace(userInputArr[f], '**'));
            tmp = tmp.replace(userInputArr[f], '**');
          }
          setUserInputArr2([tmp, ...userInputArr2]);

          // console.log(userInput2.replace('금지어', '**'));

          // setUserInputArr2([...userInputArr2, userInput2]);
          // setUserInput2('');
          // console.log(userInputArr2);
        }}
      ></button>
      {userInputArr2.map((e, i) => {
        return <p key={i}>{e}</p>;
      })}
    </>
  );
}
