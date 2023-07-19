import { styled } from 'styled-components';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.form`
  width: 50%;
  height: 70%;
  background-color: tomato;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function Login() {
  const navigate = useNavigate();
  // const [ID, setID] = useState('');
  // const [PW, setPW] = useState('');
  const userIdRef = useRef('');
  const pwRef = useRef('');

  const onLogin = (e) => {
    e.preventDefault();
    let body = {
      ID : userIdRef.current.value,
      PW : pwRef.current.value,
    };
    console.log('서버로 보낼 바디값=', body);
  };

  return (
    <Wrapper>
      <LoginForm>
        <LabelWrapper>
          <label htmlFor="id">ID</label>
          <input
            placeholder="ID"
            id="id"
            ref={userIdRef}
          />

          <label htmlFor="pw">PW</label>
          <input
            placeholder="PW"
            id="pw"
            ref={pwRef}
          />
        </LabelWrapper>

        <button onClick={(e) => onLogin(e)}>로그인</button>
        <button onClick={() => navigate('/oauth')}>회원가입</button>
      </LoginForm>
    </Wrapper>
  );
}

export default Login;
