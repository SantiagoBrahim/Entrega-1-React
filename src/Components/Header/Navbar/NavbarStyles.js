import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  gap: 10px;
  font-size: 1.2rem;
  background-color: var(--secondary);
  border-radius: 10px;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .navbar__link {
    padding: 6px 10px;
    background-color: var(--primary);
    color: var(--secondary);
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.1s;
  }

  .navbar__link:hover {
    background-color: var(--secondary);
    color: var(--primary);
    outline: 2px solid var(--primary);
  }

  .navbarMenuIcon {
    display: none;
  }

  button {
    background: none;
    border: none;
    font-size: 1.3rem;
    color: var(--primary);
    transition: all 0.1s;
  }
  button:hover {
    cursor: pointer;
    color: #000;
  }

  @media (max-width: 768px) {
    background: none;

    .navbarLinks {
      display: none;
    }

    .navbarMenuIcon {
      display: block;
    }

    button {
      background-color: var(--secondary);
      border-radius: 10px;
      width: 50px;
      height: 50px;
    }
    button:hover {
      color: var(--primary);
    }
    button:active {
      color: var(--secondary);
      background-color: #000;
    }
  }
`;
