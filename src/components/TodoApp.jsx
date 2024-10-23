import { useState } from 'react';

export default function TodoApp() {
  const [userInput, setUserInput] = useState('');
  const [inputArr, setInputArr] = useState([]);
  const [color, setColor] = useState(''); //현재색깔바뀌는거

  //함수만들기. 색깔바꿀때마다 일일이 바꿀 수 없으니까
  //멘토님이 공책에 그리면서 설명한거 (밑에함수)
  const changeColor = (target) => {
    setColor(target);
  };

  return (
    <>
      <h1>Todo App</h1>
      {color}
      <input
        // type="text"
        value={userInput}
        style={{ backgroundColor: color }}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />{' '}
      {/* {userInput} */}
      <button
        onClick={() => {
          setInputArr([...inputArr, { text: userInput, color }]); //이거 객체로 저장해야 2개이상을 저장할수있짜나
          //여기 객체 안에  text: userInput이라고 안하고 그냥 userInput 이라고 하면 밑에 객체나올떄 undefined라고뜸
          console.log(inputArr);
          setUserInput('');
        }}
      >
        입력
      </button>
      <br />
      <button
        onClick={() => {
          changeColor('white');
        }}
        style={{ backgroundColor: 'white', borderRadius: '20px', height: '15px' }}
      ></button>
      <button
        onClick={() => {
          changeColor('red');
        }}
        style={{ backgroundColor: 'red', borderRadius: '20px', height: '15px' }}
      ></button>
      <button
        onClick={() => {
          changeColor('green');
        }}
        style={{ backgroundColor: 'green', borderRadius: '20px', height: '15px' }}
      ></button>
      <button
        onClick={() => {
          changeColor('pink');
        }}
        style={{ backgroundColor: 'pink', borderRadius: '20px', height: '15px' }}
      ></button>
      <ul>
        {' '}
        {inputArr.map((e, i) => (
          <li key={i} style={{ backgroundColor: e.color }}>
            {e.text + ' ' + e.color}
            {/* 여기서 객체를 넣을 수 없어서 풀어서 text랑 color 쩜으로 넣어줌 객체넣을떄 이렇게 쩜으로할수있 */}
          </li>
        ))}
      </ul>
    </>
  );
}

//1. 입력 누르면 추가되게
//2. 컬러바 클릭하면 인풋이 흰으로,  빨 클릭하면 빨으로 바뀌게
//=> input에서 현재 색깔을
