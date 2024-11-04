import axios from 'axios';

const baseUrl = 'http://localhost:3000';
// login요청 및 처리.(token 저장)
const serverLogin = async (email, password) => {
  const url = `${baseUrl}/users/login`;
  try {
    const resp = await axios.post(url, { email, password }, { headers: { 'Content-type': 'application/json' } });
    sessionStorage.setItem('authToken', JSON.stringify(resp.data)); //stringfy 안하니까 형식이 객체로 떠서 오류남

    return resp.data;
  } catch (err) {
    console.error(err);
    return {};
  }
};

export { serverLogin };
