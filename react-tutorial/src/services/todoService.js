import axios from 'axios';
import { text } from 'react-placeholder/lib/placeholders';

const baseUrl = 'http://localhost:3000';
// Todo를 조회하는 함수
const fetchTodoList = async () => {
  const url = `${baseUrl}/todos`;
  try {
    //axios는 promise객체라 fn을 async로 변경
    const resp = await axios.get(url);
    const data = resp.data;

    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// Todo를 등록하는 함수
const addTodo = async ({ text, color }) => {
  const url = `${baseUrl}/todos`;
  let authToken = sessionStorage.getItem('authToken');
  if (authToken) {
    authToken = JSON.parse(authToken);
  }
  try {
    const resp = await axios.post(
      url,
      { text, color },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken.token}`, //매요청마다 헤더에 토큰 담아서 보내는.
        },
      },
    );
    return resp.data;
  } catch (err) {
    console.error(err);
  }
};
export { fetchTodoList, addTodo };
