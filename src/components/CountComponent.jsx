import { useEffect, useState } from "react";

export default function CountComponent() {
    //const [state값, state변경할 수있는 handler]=useState(<initialValue>)
    let [count, setCount] = useState(0)//초기값 0 으로 줄거다. 

    const addCount = () => {
        setCount(count+1);   //count바로 수정하면절대안됨.setCount통해서 수정.  setCount가 호출되면 인자값을 count에넣는다. 
        // setCount가 호출되면 count값이 바뀐ㄷ.  
        //setCount함수가 호출되면. 이function(Countcomponent가다시)을 첨부터 다시실행한다. 는말. state값이 바뀌면 새로다시그린다.(펑션을 다시실행)
    }

    console.log(`현재 count: ${count}`)
    useEffect(()=>{
        console.log("데이터 받아오기! (이 함수는 한 번만 실행됩니다.")
        return () => {
            console.log("메모리를 잡아먹으면 리소스 해제 하는 함수를 return해주어야합")

        }
    },[]) //return값은 기존의 값 해제해줘야할떄. 

    //state 변경에 대한 sideeffect처리
    useEffect(()=>{
        console.log(`count가 증가할 떄마다 실행 한번! \n -count: ${count}`);
    }, [count]) //첫번쨰는 함수, 두번쨰는 배열 dependency가 바뀔때마다 함수실행시킨다. 
    //첫번쨰로 컴포넌트생성될떄 무조건실행 => 그다음엔 디펜던시에있던애가 바뀔떄마다 실행. 


    // const addCount = () => {
    //    count +=1 
    //    console.log(count)
    // } //이렇게했을 때 콘솔상에서는 숫자증가하는데, 화면에는 안보인다는 거임. 

    // useEffect(()=>{
    //     console.log(`count가 증가할 떄마다 실행! \n -count: ${count}`);
    // }, []) 
    
    //디펜던시가빈배열이면 다시는 호출되지않고, 디펜던시가 비어있으면 이함수를 생성될떄 한번실행하고다시호출하지않음.근데숫자는올라감. 



    return (
        <div>
            <div>{count}</div>
            <button onClick={addCount}>1증가</button>
            {/* <button onClick={()=>{addCount()}} >1증가</button>  */}
           
        </div>
    //  onClick속성은 인자를 함수로받음
    )
    
}
