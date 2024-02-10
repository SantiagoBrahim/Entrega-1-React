import styled from "styled-components";

export const AboutHeroStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 40px;
  text-align: center;

  h1 {
    font-family: var(--title-font);
    font-size: 4rem;
  }

  img {
    width: 800px;
    border-radius: 50px;
    height: 500px;
    object-fit: cover;
    border: 10px solid var(--primary);
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .text > p {
    font-size: 1.1rem;
  }
  .info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    padding: 20px;
    gap: 20px;
  }

  .info > div {
    border: 2px solid var(--primary);
    padding: 5px;
    width: 70%;
    border-radius: 10px;
    background-color: var(--primary);
    color: var(--secondary);
  }

  h2 {
    font-family: var(--title-font);
    font-weight: 400;
  }
  .bold {
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    gap: 40px;
    padding: 10px;

    img {
      width: 400px;
      height: 250px;
    }
    h1 {
      font-size: 3rem;
    }
    .text > p {
      font-size: 1rem;
    }
    .info {
      padding: 10px;
      gap: 10px;
    }
  }
  @media (max-width: 768px) {
    gap: 20px;
    padding: 5px;
    flex-direction: column;

    img {
      display: none;
    }
  }

  @media (max-width: 425px) {
    .info {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 20px;
      gap: 20px;
    }
  }
`;
