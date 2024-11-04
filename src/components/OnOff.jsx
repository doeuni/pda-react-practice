// 1. 사용자 버튼을 만듦
//2. 버튼을 누르면 on off로 상태가 바뀜 true false (상태 저장)
// * 2. useEffect 를 사용해 콘솔에 메시지 출력
import { useEffect, useState } from "react";

export default function OnOff(){
    let [on, setOn] = useState(false)

    const handleToggle = () => {
        setOn(!on)
    }

    useEffect(()=>{
        {on ? console.log("Toggle is ON") : console.log("Toggle is OFF")}
    },[on])

    return (
        <div>
            <button onClick={handleToggle}>
            {on ? "ON" : "OFF"}
        </button>
        </div>
    )



}