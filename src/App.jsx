import React, { useEffect, useState } from 'react';
import TodoApp from './components/TodoApp';

export default function App() {
  const [userInfo, setUserInfo] = useState();

  const fetchBoard = () => {
    fetch('http://localhost:3000/board', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('auth-token')}`,
      },
    });
  };

  const onLogin = () => {
    fetch('http://localhost:3000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: '231e@n.com',
        password: '234',
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        localStorage.setItem('auth-token', data.token);
      });
  };

  return (
    <div>
      <TodoApp />
      <button onClick={onLogin}>로그인</button>
      App
      <button onClick={fetchBoard}>보드 fetch</button>
    </div>
  );
}
