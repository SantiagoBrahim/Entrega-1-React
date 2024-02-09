import styled from "styled-components";

export const AboutServicesStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  padding: 60px;

  h2 {
    font-family: var(--title-font);
    font-size: 2.5rem;
  }
  hr {
    width: 100%;
    border: 2px solid var(--primary);
    margin-bottom: 30px;
  }
  .cards-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 20px;
    width: 100%;
  }
  .card {
    background-color: var(--primary);
    color: var(--secondary);
    padding: 20px;
    width: 300px;
    height: 320px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .card > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .card hr {
    width: 100%;
    border: 1px solid var(--secondary);
  }
  .card h3 {
    font-family: var(--title-font);
    font-weight: 400;
    font-size: 1.5rem;
  }
  .card h4 {
    font-size: 1.7rem;
    background-color: var(--secondary);
    border-radius: 10px;
    padding: 10px;
  }
`;
