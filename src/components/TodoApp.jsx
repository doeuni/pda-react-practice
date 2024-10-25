import { useState, useEffect } from 'react';
import TodoInput from '../components2/TodoInput';
import Colorbar from '../components2/Colorbar';
import TodoList from '../components2/TodoList';
import { v4 as uuidv4 } from 'uuid';

export default function TodoApp() {
  //state값은 우리가 사용할 변수들을 저장하는
  const [userInput, setUserInput] = useState('');
  const [inputArr, setInputArr] = useState([]); //어떻게 저장할지"부터" 정하기
  const [color, setColor] = useState('white'); //현재색깔바뀌는거
  const [searchInput, setSearchInput] = useState(''); //검색어저장
  //검색결과저장

  const [copyArr, setCopy] = useState([]);
  const [edited, setEdited] = useState(false); // 수정 모드인지 확인하기 위한 플래그 값 3항써서 수정눌렀는지 안눌렀는지띄우는거 state만들고

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

  const searchHandler = (e) => {
    setSearchItem(e.curretTarget.value);
  };
  //삭제
  const onRemove = (index) => {
    const newPost = inputArr.filter((e, i) => i !== index);

    //inputArr 객체에서 돌면서 필터도는거니까
    setInputArr(newPost);
  };

  // 수정

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

  // // 한번만 실행되게 할거라서 빈배열로 두고. 추가될때 호출돼야돼 이런 분류가 생각나면 자연스럽게 useEffect가 생각날거.
  useEffect(() => {
    const storedSettings = JSON.parse(localStorage.getItem('inputArr'));
    if (storedSettings) {
      setInputArr(storedSettings);
      console.log(storedSettings);
    }
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
      <TodoList inputArr={copyArr.length !== 0 ? copyArr : inputArr} onRemove={onRemove} setInputArr={setInputArr} />
    </div>
  );
}
