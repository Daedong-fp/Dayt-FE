import styled from "styled-components";

export const LoginPage = () => {
  return (
    <Body>
      <Header>
        <Logo>
          <img src="/images/project_Logo.png" alt="Logo" />
        </Logo>
        <NavField>
          <Nav>
            <a href="DaytCalander.html" target="_blank" id="a">
              MAIN
            </a>
            <a href="DaytCalander.html" target="_blank" id="a">
              WORKSPACE
            </a>
            <a href="DaytCalander.html" target="_blank" id="b">
              DAILY
            </a>
            <a href="DaytCalander.html" target="_blank" id="c">
              CALENDER
            </a>
          </Nav>
        </NavField>
        <LogoImg>
          <img id="my" src="/images/user.svg" alt="My Info" />
          <img id="menu" src="/images/sidemenu.svg" alt="Menu" />
        </LogoImg>
      </Header>
      <Main>
        <LoginContainer>
          <LogoImage>
            <img src="/images/project_Logo.png" alt="Dayt" />
            <h1>복잡했던 프로젝트 관리, 이젠 DAYT에서 손쉽게</h1>
          </LogoImage>
          <Form>
            <Label id="id" htmlFor="user-id">
              아이디
            </Label>
            <input type="text" id="user-id" name="user-id" />
            <Label id="passwordLabel" htmlFor="user-password">
              비밀 번호
            </Label>
            <input type="password" id="password" name="password" required />
            <div className="remember-me">
              <img
                id="remember_id"
                src="/images/remember.svg"
                alt="Remember Me"
              />
              <Label htmlFor="remember-me">로그인정보 기억하기</Label>
            </div>
            <button id="login" type="submit">
              로그인
            </button>
          </Form>
          <Register href="#">DAYT의 회원이 아니신가요? 회원가입하기</Register>
        </LoginContainer>
      </Main>
    </Body>
  );
};

const Body = styled.body`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #dddddd;
`;

const Logo = styled.div`
  img {
    height: 60px;
    width: 60px;
  }
`;

const NavField = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

const Nav = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #333333;
    font-weight: bold;
    padding: 10px 15px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #f0f0f0;
      color: #000000;
    }
  }
`;

const LogoImg = styled.div`
  display: flex;
  gap: 15px;

  img {
    width: 40%;
    height: 10%;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  z-index: 20;
  flex-direction: column;
`;

const LoginContainer = styled.div`
  text-align: center;
  background-color: #ffffff;
  padding: 40px;
  width: 410px;
  height: 650px;

  h1 {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
`;

const LogoImage = styled.div`
  width: 410px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3%;

  img {
    width: 110px;
    height: 110px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input[type="text"],
  input[type="password"] {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #dddddd;
    border-radius: 13px;
    width: calc(100% - 22px);
  }

  .remember-me {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 0.9em;
    margin-left: 13px;
    margin-top: -8px;

    img:hover {
      cursor: pointer;
    }
  }

  button {
    padding: 10px 20px;
    background-color: #fff16d;
    border: none;
    border-radius: 13px;
    cursor: pointer;
    font-size: 1em;

    &:hover {
      background-color: #ffdb4d;
    }
  }
`;

const Register = styled.a`
  display: block;
  margin-top: 20px;
  text-decoration: none;
  color: #333333;
  font-size: 0.9em;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background: #171212;
    position: absolute;
    left: 50%;
    transition: width 0.3s ease, left 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

const Label = styled.label`
  font-size: 0.8em;
  font-weight: 700;
  margin-bottom: 5px;

  &#id {
    margin-right: 83%;
  }

  &#passwordLabel {
    margin-top: 3%;
    margin-right: 80%;
  }
`;
