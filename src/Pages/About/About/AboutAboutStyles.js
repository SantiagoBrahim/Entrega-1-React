import styled from "styled-components";

export const AboutAboutStyled = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--primary);
  padding: 60px;

  h2 {
    color: var(--secondary);
    font-family: var(--title-font);
    font-size: 2.5rem;
  }

  hr {
    width: 100%;
    border: 2px solid var(--secondary);
  }

  p {
    color: var(--secondary);
    font-size: 1.1rem;
    padding: 30px 0 0 0;
  }

  @media (max-width: 425px) {
    p {
      font-size: 1rem;
    }
  }
`;
