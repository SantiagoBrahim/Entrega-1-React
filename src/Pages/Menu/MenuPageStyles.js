import styled from "styled-components";

export const MenuPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  h1 {
    font-family: var(--title-font);
    font-size: 3rem;
    text-align: center;
  }
  hr {
    width: 100%;
    border: 2px solid var(--primary);
  }
  .cards-container {
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
  }
  .card {
    background-color: var(--primary);
    color: var(--secondary);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 340px;
    text-align: center;
    padding: 10px;
  }
  .card img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border: 2px solid var(--secondary);
    border-radius: 15px;
  }
  .card h2 {
    font-size: 1.2rem;
  }

  .card div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .card div p {
    font-size: 1.2rem;
  }
  .card div button {
    font-family: var(--text-font);
    font-size: 1.2rem;
    padding: 8px;
    border: 2px solid var(--secondary);
    background: var(--secondary);
    border-radius: 8px;
    color: var(--primary);
    transition: all 0.2s;
  }
  .card div button:hover {
    cursor: pointer;
    background-color: var(--primary);
    color: var(--secondary);
  }

  @media (max-width: 425px) {
    .cards-container {
      width: 300px;
    }
  }

  @media (max-width: 320px) {
    .cards-container {
      width: 280px;
    }
  }

  @media (min-width: 1921px) {
    .cards-container {
      width: 1500px;
    }
  }
`;
