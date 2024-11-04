import React, { useEffect, useState } from 'react';
import TodoApp from './components/TodoApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components2/Login';

export default function App() {
  const [userInfo, setUserInfo] = useState();

  const fetchBoard = () => {
    fetch('/board', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('auth-token')}`,
      },
    });
  };

  const onLogin = () => {
    fetch('/users/login', {
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
        console.log('here');
        localStorage.setItem('auth-token', data.token);
      });
  };

  return (
    <div>
      <Login />
      <TodoApp />
      <button onClick={onLogin}>로그인</button>
      App
      <button onClick={fetchBoard}>보드 fetch</button>
    </div>
  );
}
