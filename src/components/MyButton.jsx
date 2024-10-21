function MyButton({ title, color, clickUrl }) {
  //인자로 props받을건데 여기 머머있었냐면, 이세개.
  //xml의 프로퍼티스를 받기 떄문에 prop이다. 인자이름이.
  // console.log(props);
  // const {imgUrl, caption} =props

  return (
    <div>
      {/* <form action={clickUrl} target="_blank">
        <input
          type="submit"
          value={title}
          style={{
            backgroundColor: color,
            color: "white",
            borderRadius: "20px",
            borderStyle: "none",
            padding: "10px",
          }}
        />
    
      </form> */}
    {/* input 태그 내에서 backgroundColor사용 불가능. 스타일에넣고 */}
      <br />
{/* 
      <a
        href={clickUrl}
        target="_blank"
        style={{
          backgroundColor: color,
          borderRadius: "20px",
          borderStyle: "none",
          color: "white",
          textDecoration: "none",
          padding: "10px",
        }}
      >
        {title}
      </a> */}
    
      <button
        onClick={()=> {
            window.open(clickUrl, "_blank") //window.open사용법 첫번째가 링크고 두번째가 target값! 

        }} //react에서 event핸들러등록은 on<event이름>이라는 props로 전달한다.
        //풀어넣는다 === 중괄호하나없어진다생각. ...style 
     
        style={{
          backgroundColor: color,
          borderRadius: "20px",
          borderStyle: "none",
          color: "white",
          textDecoration: "none",
          padding: "10px",
        }}
      >
        {title}
      </button>
    </div>
  );
}

export default MyButton;
