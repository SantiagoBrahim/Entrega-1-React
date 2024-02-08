import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  background-color: var(--primary);
  color: var(--secondary);
  position: sticky;
  top: 0;
  z-index: 2;
  border-bottom: 2px solid var(--secondary);

  img {
    border-radius: 100%;
    box-shadow: 2px 2px 4px 0 #000;
    width: 75px;
    transition: all 0.2s;
  }

  img:hover {
    transform: scale(1.05);
  }

  @media (min-width: 1921px) {
    justify-content: center;
    gap: 300px;
  }
`;
