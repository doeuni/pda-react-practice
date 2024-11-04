import { useState } from 'react';

export default function WordFilterNew() {
  const [banWord, setBanWord] = useState('');
  const [banWordArr, setBanWordArr] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [userInputArr, setUserInputArr] = useState([]);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let temp = userInput;
          for (let b in banWordArr) {
            temp = temp.replace(banWordArr[b], '**');
          }
          console.log(temp);
          setUserInputArr([temp, ...userInputArr]);
          console.log(userInputArr);
        }}
      >
        사용자입력
      </button>
      <ul>
        {userInputArr.map((e, i) => {
          return <li>{e}</li>;
        })}
      </ul>
      <br />
      <input
        type="text"
        value={banWord}
        onChange={(e) => {
          setBanWord(e.target.value);
        }}
      />{' '}
      <button
        onClick={() => {
          setBanWordArr([...banWordArr, banWord]);
          console.log(banWordArr);
        }}
      >
        금지어입력
      </button>
      <ul>
        {banWordArr.map((e, i) => {
          return <li> {e} </li>;
        })}
      </ul>
    </>
  );
}
