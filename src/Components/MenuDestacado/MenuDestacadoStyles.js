import styled from "styled-components";

export const MenuDestacadoStyled = styled.div`
  padding: 100px 20px;

  h2 {
    font-family: var(--title-font);
    font-size: 3rem;
    text-align: center;
  }

  hr {
    border: 2px solid var(--primary);
    margin: 20px 0;
  }

  .productsContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
    gap: 20px;
  }

  .product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: var(--primary);
    color: var(--secondary);
    width: 280px;
    height: 350px;
    border-radius: 10px;
    padding: 20px;
  }
  .product > img {
    width: 180px;
    height: 180px;
    border: 2px solid var(--secondary);
    border-radius: 12px;
    object-fit: cover;
  }

  .product > h3 {
    font-size: 1.3rem;
    text-align: center;
  }

  .product > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .product > div > p {
    font-size: 1.2rem;
  }

  .product > div > button {
    background-color: var(--secondary);
    color: var(--primary);
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 8px;
    border: none;
    font-family: var(--text-font);
    transition: all 0.1s;
  }

  .product > div > button:hover {
    cursor: pointer;
    background-color: var(--primary);
    outline: 2px solid var(--secondary);
    color: var(--secondary);
  }

  .see-more-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .see-more-btn {
    font-size: 2rem;
    padding: 10px 20px;
    background-color: var(--primary);
    color: var(--secondary);
    border: 2px solid var(--primary);
    border-radius: 10px;
    text-decoration: none;
    transition: all 0.2s;
  }

  .see-more-btn:hover {
    cursor: pointer;
    background-color: var(--secondary);
    color: var(--primary);
  }

  @media (max-width: 375px) {
    h2 {
      font-size: 2.6rem;
    }
  }

  @media (max-width: 320px) {
    h2 {
      font-size: 2.3rem;
    }
  }

  @media (min-width: 1921px) {
    .productsContainer {
      justify-content: center;
      gap: 50px;
    }
  }
`;
