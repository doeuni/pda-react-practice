import { useState, useEffect } from 'react'

export default function CountComponent() {
  let [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count+1);   //count바로 수정하면절대안됨.setCount통해서 수정.  setCount가 호출되면 인자값을 count에넣는다. 
    // setCount가 호출되면 count값이 바뀐ㄷ.  
    //setCount함수가 호출되면. 이function(Countcomponent가다시)을 첨부터 다시실행한다. 는말. state값이 바뀌면 새로다시그린다.(펑션을 다시실행)
}
// 0초 : setInterval(1) => setcount(0+1) - (3초마다 동작)
// 3초 : setInterval(2) => setcount(1+1) - (3초마다 동작)
// 6초 : setInterval(3) => setCount(2+1) - (3초마다 동작)

//0초 setInterval(1) => setcount(1)
//3초 count:1 => setInterval(2) => setcount(2) +setCount(1) ->setInterval(2) 
//6초 count:2

  useEffect(()=>{
    // State변경에 대한 SideEffect처리
    // Dependency가 변경될 때마다, 첫번째인자인 effectCallback 함수를 실행시킨다.
    console.log(`카운트가 증가할때마다 실행! \n -count: ${count}`);
    
    setInterval(()=>{
        setCount(count+1); //count 바뀔 때 1
    }, 3000) //3초에 한번씩 1씩 증가. 셋인터벌이 여러벌 마음대로 호출되서 숫자 이상한. 
    // return ()
    
  }, [count])//count 바뀔 때 2

//   e
  return (
    <div>
      <div>{count}</div>
      <button onClick={addCount}>1 증가</button>
    </div>
  )
}