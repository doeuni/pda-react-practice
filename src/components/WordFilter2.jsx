import { useState } from 'react';

export default function WordFilter2() {
  const [userInput, setUserInput] = useState('');
  const [userInput2, setUserInput2] = useState('');
  const [inputArr, setInputArr] = useState([]);
  const [inputArr2, setInputArr2] = useState([]);

  return (
    <>
      <input
        type="text"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />{' '}
      <button
        onClick={(e) => {
          setInputArr([...inputArr, userInput]);
          setUserInput('');
        }}
      >
        버튼
      </button>
      {inputArr}
      {/* 근데 , 버튼 한번 클릭하면, 인풋창위에있던애들을 초기화시켜줘야함
      값바뀌게하려면 set~~~를 써야했잖아. */}
      {/* 버튼 클릭시, 인풋 내에있던 userInput을 배열에 저장해주는 걸 할거다. 값들을 담아둘 배열을 일단 만든다. */}
      {/* setUserInput이 아니라 userInput임. 이유는 setUserInput은 변화위한거고..
      함수?라서 값을 보여주려면 무조건 앞에거.. */}
      <br />
      <input type="text" />
      <button>버튼</button>
    </>
  );
}
//지금할거 인풋태그 2개 만들고 입력받은거 보여주려면 배열에 저장해서 보여주기
