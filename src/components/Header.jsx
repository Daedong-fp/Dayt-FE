import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #ffffff;
  height: 70px;
  display: flex; 
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.295);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 35px;
  padding-right: 55px;
  img {
    width: 50px;
    height: 50px;
  }
`;

const NavField = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 80%;
  height: 70px;
  padding-right: 120px;
`;

const Nav = styled.div`
  height: 70px;
  display: flex;
  gap: 55px;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  padding: 0;
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-weight: bold;
  padding:10px 5px 10px 5px;
  border-radius:20px;
  transition: all 0.5s;
  &:hover {
    background-color: #fff44f;
    transform: scale(1.2);
  }
`;

const LogoImg = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 15px;
    margin: 0;
    display: flex;
    align-items: center;
  }
  p:nth-child(2) {
    padding-left: 5px;
  }
  img {
    margin: auto;
    padding: auto;
    display: flex;
    margin-left: 20px;
    margin-right: 15px;
  }
  img:first-of-type {
    height: 25px;
    width: 20px;
  }
  img:last-child {
    margin-right: 100px;
  }
`;

export const Header = () => (
  <HeaderWrapper>
    <Logo>
      <img src="/images/4-removebg-preview.png" alt="Logo" />
    </Logo>
    <NavField>
      <Nav>
        <NavLink href="DaytCalander.html" target="_blank">MAIN</NavLink>
        <NavLink href="DaytCalander.html" target="_blank">WORKSPACE</NavLink>
        <NavLink href="DaytCalander.html" target="_blank">DAILY</NavLink>
        <NavLink href="DaytCalander.html" target="_blank">CALENDER</NavLink>
      </Nav>
    </NavField>
    <LogoImg>
      <p>User</p>
      <p>님</p>
      <img src="/images/Vector-1.png" alt="Vector" />
      <img src="/images/Group 46.png" alt="Group 46" />
    </LogoImg>
  </HeaderWrapper>
);