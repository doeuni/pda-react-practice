import { useEffect, useState } from 'react';

export default function Timer2() {
  const [timer, setTimer] = useState(0); //타이머기록 state
  const [isRunning, setIsrunning] = useState(false); //현재실행중인지아닌지판단할
  const onStart = () => {
    setIsrunning(true);
  };

  //   useEffect(()=>{},[]) 기본틀
  useEffect(() => {
    // isRunning이 true로 변경되면 timer를 1씩 줄이는 interval 등록
    if (isRunning) {
      const intervalId = setInterval(() => {
        //intervalId 변수 넣을때 바로? ㅇㅇㅇ 바깥에해두면 함수다시실행되면
        //undefined 되자나 위에잇음 ㅇㅇ / 클리어하고 리소스반납해줄떄 어차피
        //그 이프문내에서 바로 리턴해줌됨 ㅇㅇ . 복잡하게 생각할필요 x
        //리소스점유하면 점유한 즉시 리턴
        setTimer((prev) => prev - 1);
      }, 1000); //1초에 한번씩 마이너스계속.
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isRunning]); //isRunning이 바뀔때마다 실행

  useEffect(() => {
    if (timer === 0 && isRunning) {
      setIsrunning(false);
      alert('타이머종료');
    }
  }, [timer, isRunning]); //isRunnig 이 트루일때만 또 되어야하니까
  return (
    <>
      <h1>TImer2</h1>
      <div>
        <label htmlFor="">시간</label>
        <input
          type="text"
          onChange={(e) => {
            setTimer(e.target.value);
          }}
        />
        {/* 인풋에서 남은시간 onChange로 변경 */}
        <button onClick={onStart}></button>
      </div>
      <div>남은시간: {timer}</div>
    </>
  );
}
