import styled from "styled-components";

export const PhoneNavbarStyled = styled.div`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 2.2rem;
  background-color: rgba(217, 217, 217, 0.8);
  position: fixed;
  top: 0;
  z-index: 1;
  display: none;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 80%;
  }

  a {
    padding: 6px 10px;
    background-color: var(--primary);
    color: var(--secondary);
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.1s;
  }

  a:hover {
    background-color: var(--secondary);
    color: var(--primary);
    outline: 2px solid var(--primary);
  }

  .navbarMenuIcon {
    display: none;
  }

  button {
    background: none;
    border: none;
    font-size: 1.3rem;
    color: var(--primary);
    transition: all 0.1s;
  }
  button:hover {
    cursor: pointer;
    color: #000;
  }
`;
