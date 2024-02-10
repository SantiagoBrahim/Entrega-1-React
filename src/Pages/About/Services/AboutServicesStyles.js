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
    text-align: center;
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
    flex-wrap: wrap;
    gap: 20px;
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
    width: 300px;
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

  @media (max-width: 768px) {
    .card {
      height: 350px;
    }
  }
  @media (max-width: 425px) {
    .card {
      height: 400px;
    }
    .card > div {
      width: 300px;
    }
  }
  @media (max-width: 320px) {
    .card {
      height: 350px;
      padding: 0;
    }
    .card > div {
      width: 250px;
    }
  }

  @media (min-width: 1921px) {
    .cards-container {
      width: 1200px;
    }
  }
`;
