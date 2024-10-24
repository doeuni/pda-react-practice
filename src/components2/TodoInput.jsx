export default function TodoInput(props) {
  return (
    <div>
      <div>
        <h1>Todo App</h1>
      </div>
      <div>
        {/* 부모 -> 자식 데이터전달 : props로
        자식 -> 부모 불가.
        만약부모의 state를 자식컴포넌트가 변경시키고자하면 부모의 state를 변경하는 함수를 자식에게 전달해주자 
        함수도 하나의 데이터타입이니깐!*/}
        <input
          // type="text"
          value={props.userInput}
          style={{ backgroundColor: props.color }}
          onChange={(e) => props.getInput(e)}
        />{' '}
        {/* {userInput} */}
        <button onClick={() => props.addArr()}>입력</button>
      </div>
    </div>
  );
}
