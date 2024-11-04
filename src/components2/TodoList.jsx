import { useState } from 'react';

export default function TodoList(props) {
  const [state, setState] = useState(false);
  // const [index, setIndex] = useState([]);
  const [newText, setNewText] = useState('');
  //  inputarr.text하면 안댐 배열의 텍스트는없다
  // 배열[i]에 {color,text} 가 각각 들어가잇는거니까..!!!
  const [index, setIndex] = useState(0);

  const onClickEdit = (index) => {
    const text = newText;
    const newItem = props.inputArr.map((e, i) => (i === index ? { ...e, text } : e)); //처음에 맨마지막에 e가아니라 배열을 넣었어서 배열이 추가됐었음
    props.setInputArr(newItem);
  };
  const updateState = (i) => {
    setIndex(i);
    setState(!state);
    // 이 안에서 호출해주는 이유는 아까보니까 oncahnge로 해가지고 바로바로 바뀌잖아 그래가지고 수정다하고 나서 버튼 다시 클릭하면 바뀌게...
    //길이 체크해주는것도 처음에 내가 useState ''로 초기화해둿으니까 그때 안바뀌게!!
    if (state === true && newText.length > 0) {
      onClickEdit(i);
    }
  };

  return (
    <div>
      <ul style={{ paddingLeft: 0 }}>
        {props.inputArr !== null
          ? props.inputArr.map((e, i) => (
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
                {e.newText ? e.newText : e.text}
                <button onClick={() => props.onRemove(i)} style={{ border: '0', backgroundColor: 'white' }}>
                  삭제
                </button>
                {/* 버튼을 클릭하면 수정할 input을 받는 input 태그가 뜨는거고 
                그러믄 버튼 온클릭은 setState 를 해주고 인풋태그부분에서 onclick하면 edit 호출하게 */}
                <button onClick={() => updateState(i)} style={{ border: '0', backgroundColor: 'white' }}>
                  {/* <button onClick={() => props.onClickEdit(i)} style={{ border: '0', backgroundColor: 'white' }}> */}
                  {/* 위에서 onClickEdit 하는게아니라  */}
                  수정
                </button>
                {state === true && i === index ? (
                  <input type="text" onChange={(e) => setNewText(e.target.value)}></input>
                ) : null}
                {/* 여기서 객체를 넣을 수 없어서 풀어서 text랑 color 쩜으로 넣어줌 객체넣을떄 이렇게 쩜으로할수있 */}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
