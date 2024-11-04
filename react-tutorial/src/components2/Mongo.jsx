//

import { useEffect, useState } from 'react';

export default function Mongo() {
  const [users, setUsers] = useState([]); //보드리스트 보여줄 state

  useEffect(() => {
    //useEffect 인자 첫번째 함수, 두번째 디펜던시 /디펜던시가 바뀔떄마다첫번쨰실행. 실행시킬때마다 이전의 반환값인함수를 실행시키고시킨다
    // 해당컴포넌트가 언마운트될떄마다 마지막으로반환된 리턴값인 함수를 실해ㅇㅇ시키고없앤다.  바뀔때마다 변한다는거는
    fetch(`http://localhost:3000/comment`)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <div>
      {users.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.content}</p>
            <p>{item.author}</p>
          </div>
        );
      })}
    </div>
  );
}
