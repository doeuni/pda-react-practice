import { useState, useEffect } from 'react';
import TodoInput from '../components2/TodoInput';
import Colorbar from '../components2/Colorbar';
import TodoList from '../components2/TodoList';
import { v4 as uuidv4 } from 'uuid';

export default function TodoApp() {
  //state값은 우리가 사용할 변수들을 저장
  const [userInput, setUserInput] = useState('');
  const [inputArr, setInputArr] = useState([]); //어떻게 저장할지"부터" 정하기
  const [color, setColor] = useState('white'); //현재색깔바뀌는거
  const [searchInput, setSearchInput] = useState(''); //검색어저장
  //검색결과저장
  const [copyArr, setCopy] = useState([]);

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

  //삭제
  const onRemove = (index) => {
    const newPost = inputArr.filter((e, i) => i !== index);
    //inputArr 객체에서 돌면서 필터도는거니까
    setInputArr(newPost);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await fetch('/users/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const result = await response.json();

    // 수정
    useEffect(() => {
      setCopy(inputArr);
    }, [inputArr]);
    //너무렌더링 많이돼서 오류뜨거나 특정부분만 바뀔때 다시 실행하고 싶을 때 쓴다고 생각

    //새로고침해도 저장되어있게
    useEffect(() => {
      if (inputArr.length > 0) {
        //위에 줄 안 넣었을 때 배열에 저장 안 됐던 이유는 inputArr가 바뀔때마다
        //코드 위에서부터 내려오면 초기값을 빈 배열로 넣어놔서 빈 배열이 저장 되어서 그런거 ㅇㅇ
        const settingJson = JSON.stringify(inputArr);
        localStorage.setItem('inputArr', settingJson);
      }
    }, [inputArr]);

    //한번만 실행되게 할거라서 빈배열로 두고. 추가될때 호출돼야돼 이런 분류가 생각나면 자연스럽게 useEffect가 생각날거.
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
        {/* 
        <input
          type="id"
          value={email}
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="로그인"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="비번"
        />
        <button onClick={onLogin}>로그인</button> */}
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
  };
}
