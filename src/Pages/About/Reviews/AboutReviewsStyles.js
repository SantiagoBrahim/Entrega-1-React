import styled from "styled-components";

export const AboutReviewsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  padding: 60px;
  background-color: var(--primary);

  h2 {
    font-family: var(--title-font);
    font-size: 2.5rem;
    color: var(--secondary);
  }
  hr {
    width: 100%;
    border: 2px solid var(--secondary);
  }

  .reviews-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 100px;
    padding: 40px;
  }
  .review {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    background-color: var(--secondary);
    padding: 40px;
    border-radius: 10px;
    max-width: 800px;
  }

  h4 {
    font-size: 1.5rem;
  }
  .review > p {
    font-size: 1.1rem;
  }
  .review__description h5 {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .review__description p {
    font-size: 1.1rem;
  }
`;
