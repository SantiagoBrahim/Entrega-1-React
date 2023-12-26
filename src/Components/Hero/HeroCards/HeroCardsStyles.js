import styled from "styled-components";

export const HeroCardsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 450px 10px 200px 10px;
  gap: 250px;

  background-color: var(--primary);

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

  @media (max-width: 1440px) {
    padding: 400px 10px 200px 10px;
    gap: 100px;
  }

  @media (max-width: 1024px) {
    gap: 50px;
    padding: 380px 10px 200px 10px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 100px 10px 200px 10px;
    .card:first-child,
    .card:last-child {
      transform: translateY(0);
    }
  }
`;
