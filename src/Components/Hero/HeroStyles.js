import styled from "styled-components";

export const HeroStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 50px;
  position: relative;
  padding-bottom: 400px;
  h1 {
    font-size: 5rem;
    color: var(--primary);
    font-family: var(--title-font), sans-serif;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
    color: var(--primary);
    text-align: center;
  }

  img {
    width: 765px;
    position: absolute;
    top: 230px;
  }

  @media (max-width: 1440px) {
    img {
      top: 290px;
      width: 645px;
    }
  }

  @media (max-width: 1024px) {
    img {
      top: 333px;
      width: 550px;
    }
  }
  @media (max-width: 768px) {
    padding-bottom: 100px;
    img {
      display: none;
    }
  }

  @media (max-width: 375px) {
    padding: 20px;
    padding-bottom: 100px;
    h1 {
      font-size: 4.6rem;
    }

    h2 {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 320px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;
