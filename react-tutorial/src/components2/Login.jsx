import { useCallback, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { serverLogin } from '../services/authService';
export default function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [authToken, setAuthToken] = useState({});

  const [userInput, setUSerInput] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const data = sessionStorage.getItem('authToken');
    if (data) {
      setAuthToken(JSON.parse(data));
    } //데이터가져올때
  }, []);

  const submitLogin = useCallback(() => {
    console.log(userInput);
    serverLogin(userInput.email, userInput.password).then((data) => {
      setAuthToken(data);
      handleClose();
    }); //서버로그인이 끝났을 때 then으로 하고 Authtoken설정
  }, [userInput]);

  return (
    <>
      {authToken.email ? (
        authToken.email
      ) : (
        <Button variant="primary" onClick={handleShow}>
          로그인
        </Button>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e) => {
                  setUSerInput((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
                value={userInput.email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => {
                  setUSerInput((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
                value={userInput.password}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitLogin}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
