import styled from "styled-components";

export const HeroCardsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 450px 10px 200px 10px;
  gap: 100px;
  background-color: var(--primary);

  .cards-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 250px;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    background-color: var(--secondary);
    color: var(--primary);
    text-align: center;
    width: 250px;
    height: 320px;
    padding: 20px;
    border-radius: 10px;
  }

  .card > h3 {
    font-family: var(--title-font);
    font-size: 1.3rem;
  }

  .card > p {
    font-size: 1.1rem;
  }

  .card:first-child,
  .card:last-child {
    transform: translateY(-100px);
  }

  .link-btn {
    font-size: 2rem;
    background-color: var(--secondary);
    padding: 10px;
    font-family: var(--text-font);
    border: 2px solid var(--secondary);
    color: var(--primary);
    border-radius: 10px;
    text-decoration: none;
    transition: all 0.2s;
  }

  .link-btn:hover {
    background-color: var(--primary);
    color: var(--secondary);
    cursor: pointer;
  }

  @media (max-width: 1440px) {
    padding: 400px 10px 200px 10px;
    gap: 100px;
  }

  @media (max-width: 1024px) {
    gap: 50px;
    padding: 380px 10px 200px 10px;

    .cards-container {
      gap: 100px;
      flex-wrap: wrap;
    }
    .card:first-child,
    .card:last-child {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 100px 10px 200px 10px;
  }
`;
