import { useState } from 'react';

export default function TodoApp2() {
  const [userInput, setUserInput] = useState('');
  const [inputArr, setInputArr] = useState([]);
  const [color, setColor] = useState('');
  const changeColor = (target) => {
    setColor(target);
  };

  return (
    <>
      <h1>To do app2</h1>
      <input
        type="text"
        value={userInput}
        style={{ backgroundColor: color }}
        onChange={(e) => setUserInput(e.target.value)}
      />
      {/* value={userInput} 이거 안넣으니까 밑에서 버튼눌렀을 때 클릭해도 입력창 초기화가 안됐는데 이유가 
      userInput자체는 초기화가 된건데 input에 작성된 값이 userInput이라고 지정이 안된거니까 반영이 안된거 */}
      <button
        onClick={() => {
          setInputArr([...inputArr, { userInput, color }]);
          setUserInput('');
          console.log(userInput);
        }}
      >
        입력
      </button>

      <br />
      {/* 일단 버튼을 눌렀을때 그 해당 컬러 글자가 뜨게해보자  */}
      <button
        onClick={() => {
          changeColor('pink');
        }}
      >
        핑
      </button>

      <button
        onClick={() => {
          changeColor('yellow');
        }}
      >
        노
      </button>
      <button
        onClick={() => {
          changeColor('blue');
        }}
      >
        파
      </button>
      <button
        onClick={() => {
          changeColor('black');
        }}
      >
        검
      </button>
      {color}
      <ul>
        {inputArr.map((e, i) => (
          <li key={i}>
            {e.userInput}
            {e.color}
          </li>
        ))}
      </ul>
    </>
  );
}
