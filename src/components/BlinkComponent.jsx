import { useEffect, useState } from "react";

export default function BlinkComponent({ text }) {
  const [showText, setShowText] = useState(true);
  // useEffect (함수, dependency배열)
  // 2번째 인자인 dependency가 변할때마다 첫번째 함수를 실행한다.
  useEffect(() => {
    const timeoutId = setInterval(() => {
      setShowText((showText) => !showText); // setShowText (showText => {return !showText})랑똑같다.
      //리턴이한줄일땐 생략간으.
    }, 1000);
    return () => {
      clearInterval(timeoutId);
    };
  }, []); //2번째인자는 비어이싸. 생성될때한번만호출. 될거야.

  return (
    <div>
      {showText ? text : null}
      {/* true 일떄  showText보여주고 null일떈 안보여주고 */}
    </div>
  );
}
