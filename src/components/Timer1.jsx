import { useEffect, useState } from 'react';

export default function Timer1() {
  const [timer, setTimer] = useState(0); //몇초가지났는지 기록한 변수
  const [isRunning, setIsrunning] = useState(false); //실제동작하는지안하는지에 대한 상태변수. 없으면 언제가 스타트인지스탑인지모르니까요

  const onStart = () => {
    setIsrunning(true);
  };

  const onStop = () => {
    setIsrunning(false);
  };

  const onReset = () => {
    setIsrunning(false);
    setTimer(0);
  };
  //   useEffect(()=>{},[]) 기본틀
  //state가 변경될떄마다 실행되는함수인 useEffect
  //   useEffect(()=>{},[])
  //여기이해못한듯
  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      //setState 함수 사용법 2가지.1.값넣어주기 2. 함수넣어주기(리턴값으로 state바꾸겠다)
      //첫번째 인자는 이전 state  +
      //setTimer(timer+1) <- 이러면 동작이 이상할거임.위에건 값으로넣어준건데. timer 가 디펜던스에안들어갓으니
      //위에거쓰려면 디펜던시에timer도 넣어줘야함
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isRunning, timer]);

  return (
    <>
      <h1>TImer</h1>
      {timer}
      <button onClick={onStart}>s</button>

      {/* 버튼이 필요할거ㅏ다 버튼안에서 함수정의해도되지만 분맇겟다 가독성위해*/}
      <button onClick={onStop}>stop</button>
      <button onClick={onReset}>reset</button>
    </>
  );
}
