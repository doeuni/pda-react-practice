import { useState, useEffect } from 'react'

export default function CountComponent() {
  let [count, setCount] = useState(0);

  useEffect(()=>{
    // State변경에 대한 SideEffect처리
    // Dependency가 변경될 때마다, 첫번째인자인 effectCallback 함수를 실행시킨다.
    console.log(`카운트가 증가할때마다 실행! \n -count: ${count}`);
    
    setInterval(()=>{
        setCount(count+1); //count 바뀔 때 1
    }, 3000) //3초에 한번씩 1씩 증가. 셋인터벌이 여러벌 마음대로 호출되서 숫자 이상한. 
    // return ()
    
  }, [count])//count 바뀔 때 2

  return (
    <div>
      <div>{count}</div>
      {/* <button onClick={addCount}>1 증가</button> */}
    </div>
  )
}