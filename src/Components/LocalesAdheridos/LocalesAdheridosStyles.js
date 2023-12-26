import styled from "styled-components";

export const LocalesAdheridosStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding: 40px 0px;
  padding-top: 100px;

  background-color: var(--primary);
  color: var(--secondary);

  h2 {
    font-family: var(--title-font), sans-serif;
    font-size: 3rem;
    text-align: center;
  }

  hr {
    border: 2px solid var(--secondary);
    margin: 20px 0;
    width: 100%;
  }

  .localsContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    width: 100%;

    padding: 20px;

    background-color: var(--secondary);
  }

  .local > a > img {
    border-radius: 10px;
    width: 150px;
    height: 150px;
    object-fit: cover;
    transition: all 0.2s;
  }

  .local > a > img:hover {
    outline: 2px solid var(--primary);
    filter: drop-shadow(0 0 20px var(--primary));
    transform: scale(1.1);
  }

  iframe {
    width: 500px;
    height: 500px;
    border-radius: 10px;
    border: none;
  }

  @media (max-width: 768px) {
    iframe {
      width: 400px;
      height: 400px;
    }
  }

  @media (max-width: 425px) {
    iframe {
      width: 350px;
      height: 350px;
    }
  }

  @media (max-width: 375px) {
    iframe {
      width: 300px;
      height: 300px;
    }
    h2 {
      font-size: 2.6rem;
    }
  }

  @media (max-width: 320px) {
    iframe {
      width: 270px;
      height: 270px;
    }
    h2 {
      font-size: 2.3rem;
    }
  }

  @media (min-width: 1921px) {
    .localsContainer {
      justify-content: center;
      gap: 40px;
    }
  }
`;
