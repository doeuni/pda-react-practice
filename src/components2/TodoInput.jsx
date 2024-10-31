export default function TodoInput(props) {
  return (
    <div>
      <div>
        <h1>Todo App</h1>
      </div>
      <div>
        <input
          // type="text"
          value={props.userInput}
          style={{ backgroundColor: props.color }}
          onChange={(e) => props.getInput(e)}
        />
        {/* {userInput} */}
        <button onClick={() => props.addArr()}>입력</button>
      </div>
    </div>
  );
}
