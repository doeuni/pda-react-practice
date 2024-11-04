//

import { useEffect, useState } from 'react';

export default function Practice3() {
  const [users, setUsers] = useState([]); //url눌렀을 떄 요소가 배열임.

  useEffect(() => {
    //useEffect 인자 첫번째 함수, 두번째 디펜던시 /디펜던시가 바뀔떄마다첫번쨰실행. 실행시킬때마다 이전의 반환값인함수를 실행시키고시킨다
    // 해당컴포넌트가 언마운트될떄마다 마지막으로반환된 리턴값인 함수를 실해ㅇㅇ시키고없앤다.  바뀔때마다 변한다는거는
    fetch(`https://jsonplaceholder.typicode.com/users/`)
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
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div>
        );
      })}
      {/* 배열렌더링 */}
      {/* {users.map((el,i ) => {
                return (
                    
                )
            })} */}
      {/* {users.map((user) => {
                <div key={user.id}>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <hr/>) */}
    </div>
  );
}
