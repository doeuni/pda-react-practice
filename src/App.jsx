import HelloWorld, { HelloWorld2, sampleVar } from './components/HelloWorld';

//자바스크립튼데 xml을 같이표현할 수 있는. jsx = js xml ~~
//export default 는 import시 중괄호없이
//export는 import시 중괄호 필요

import CaptionImage from './components/CaptionImage';
import MyButton from './components/MyButton';
import BlinkComponent from './components/BlinkComponent';
import CountComponent2 from './components/CountComponent2';
import OnChangeInput from './components/OnChangeInput';
import InputSum from './components/InputSum';
import Practice2 from './components/Practice2';
import OnOff from './components/OnOff';

import { useState } from 'react';
import Practice3 from './components/Practice3';
// import Practice4 from './components/Practice4';
import WordFilter from './components/WordFilter';
// import WordFilter from './components/WordFilter';
import OnOffButton from './components/OnOffButton';
import WordFilterNew from './components/WordFilterNew';
function App() {
  // const [visible, setVisible] = useState(true)
  return (
    <div>
      {/* <CaptionImage 
      imgUrl="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MDdfMTcy%2FMDAxNjI4MzI1MjkyNzY2.nlWta4LfbRWq4REgnOBoYORbjpel_2qhZf4AeRTo65Eg.hh5q0DDfl07a_fsNE4KxpV8XJtG7cq-NOwpk9bSMw58g.JPEG.car5578%2F1628325067824.jpg&type=sc960_832" 
      caption= "이건 트럭입니다."
      />  */}
      {/* <MyButton 
      title="네이버로 이동"
      color="green"
      clickUrl="https://www.naver.com" 

      style = {{fontSize: '1.2em'}} //이거스타일줘봣자 mybuttondpt에서 스타일속성 안받았으니까 안먹음 . 
      className = "sample" 
      //ejaksemf더만들고싶으면 몇개들어올지모르겠지만 하위프롭스에 전달하고싶으면, 
 
      />
    <HelloWorld /> */}
      {/* <BlinkComponent 
      text="dkan"/> */}
      {/* <HelloWorld2 /> */}
      {/* {sampleVar.greeting} */}
      {/* <CountComponent /> */}
      {/* <button onClick={() => setVisible(!visible)}>보이기</button>
      {visible ? <CountComponent2/>:null} */}
      {/* <OnChangeInput /> */}
      {/* <InputSum /> */}
      {/* <Practice2 /> */}
      {/* <OnChangeInput /> */}
      {/* <OnOff /> */}
      {/* <Practice3 /> */}
      {/* <Practice4 /> */}
      <WordFilterNew />
      {/* <OnOffButton /> */}
    </div>
  );
}

export default App;
