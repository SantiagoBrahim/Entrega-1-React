import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  padding: 50px 20px 20px 20px;

  div {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;
    gap: 30px;
    font-size: 1.1rem;
    width: 100%;
  }

  div > a {
    text-decoration: none;
    color: var(--primary);
  }

  button {
    font-family: var(--text-font);
    background-color: var(--primary);
    color: var(--secondary);
    font-size: 1.4rem;
    border-radius: 10px;
    border: none;
    padding: 10px 8px;
    transition: all 0.1s;
  }

  button:hover {
    cursor: pointer;
    background-color: var(--secondary);
    color: var(--primary);
    outline: 2px solid var(--primary);
  }

  hr {
    border: 2px solid var(--primary);
    width: 100%;
  }

  .copyright-text {
    opacity: 0.7;
    font-family: var(--title-font), sans-serif;
    font-size: 0.75rem;
  }

  @media (min-width: 1921px) {
    div {
      justify-content: center;
      width: 60%;
    }
  }
`;
