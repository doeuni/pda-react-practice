import { useState, useEffect } from 'react';
import TodoInput from '../components2/TodoInput';
import Colorbar from '../components2/Colorbar';
import TodoList from '../components2/TodoList';
export default function TodoApp() {
  //state값은 우리가 사용할 변수들을 저장하는
  const [userInput, setUserInput] = useState('');
  const [inputArr, setInputArr] = useState([]); //어떻게 저장할지부터 정하기
  const [color, setColor] = useState(''); //현재색깔바뀌는거
  const [searchInput, setSearchInput] = useState('');
  const [copyArr, setCopy] = useState([]);

  //함수만들기. 색깔바꿀때마다 일일이 바꿀 수 없으니까
  //멘토님이 공책에 그리면서 설명한거 (밑에함수)
  // const changeColor = (target) => {
  //   setColor(target);
  // };

  //setUSerInput 여기는 TodoInput여기 안돼있어서 함수로 다시 만들어서
  const getInput = (e) => {
    setUserInput(e.target.value);
  };

  const addArr = () => {
    setInputArr([...inputArr, { text: userInput, color: color }]); //이거 객체로 저장해야 2개이상을 저장할수있음
    //여기 객체 안에  text: userInput이라고 안하고 그냥 userInput 이라고 하면 밑에 객체나올떄 undefined라고뜸
    console.log(inputArr);
    setUserInput('');
  };
  // 선생님은 여기서 useCallback으로 감싸서 todoInput이랑 pickedColor바뀔때
  // useCallback 안써도 문제는 없는데 최적화용.
  // const addTodo = useCallback(() => {
  //   setTodoArray((prevTodoArr) => [
  //     ...prevTodoArr,
  //     {
  //       text: todoInput,
  //       color: pickedColor,
  //     },
  //   ]);
  //   setTodoInput('');
  // }, [todoInput, pickedColor]);

  const searchHandler = (e) => {
    setSearchItem(e.curretTarget.value);
  };
  useEffect(() => {
    setCopy(inputArr);
  }, [inputArr]);
  // useEffect 2개만들어서
  // useEffect(()=>{},[]) 기본틀 //너무렌더링 많이돼서 오류뜨거나 특정부분만 바뀔때다시실행하고싶을때쓴다고생각

  //새로고침해도 저장되어있게
  useEffect(() => {
    if (inputArr.length > 0) {
      //이 줄 안넣었을 때 배열에 저장 안됐떤이유는 inputArr가 바뀔떄마다
      //코드 위에서부터 내려오면 초기값을 빈 배열로 넣어놔서 빈 배열이 저장되어서 그런거 ㅇㅇ
      const settingJson = JSON.stringify(inputArr);
      localStorage.setItem('inputArr', settingJson);
    }
  }, [inputArr]);

  // // 한번만 실행되게 할거라서 빈배열로 두고
  useEffect(() => {
    const storedSettings = JSON.parse(localStorage.getItem('inputArr'));
    setInputArr(storedSettings);
    console.log(storedSettings);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'skyblue' }}>
      <TodoInput color={color} userInput={userInput} getInput={getInput} addArr={addArr} />
      <br />

      {/* 검색 */}
      <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
      <button
        onClick={() => {
          if (searchInput !== '') {
            setCopy(inputArr.filter((data) => data.text.includes(searchInput)));
            // console.log(copyArr);
          } else {
            setCopy(inputArr);
          }
          setSearchInput('');
        }}
      >
        검색
      </button>
      <Colorbar setColor={setColor} />
      <TodoList inputArr={copyArr.length !== 0 ? copyArr : inputArr} />
    </div>
  );
}
