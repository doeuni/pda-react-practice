export default function TodoList(props) {
  return (
    <div>
      <ul style={{ paddingLeft: 0 }}>
        {' '}
        {props.inputArr.map((e, i) => (
          <li
            key={i}
            style={{
              backgroundColor: e.color,
              width: '150px',
              listStyle: 'none',
              paddingLeft: 0,
              marginBottom: '10px',
            }}
          >
            {/* {e.text + ' ' + e.color} */}
            {e.text}
            {/* 여기서 객체를 넣을 수 없어서 풀어서 text랑 color 쩜으로 넣어줌 객체넣을떄 이렇게 쩜으로할수있 */}
          </li>
        ))}
      </ul>
    </div>
  );
}
