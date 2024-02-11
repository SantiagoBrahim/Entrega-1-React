import styled from "styled-components";

export const ContactStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;

  h1 {
    font-family: var(--title-font);
    font-size: 3rem;
  }
  hr {
    width: 100%;
    border: 2px solid var(--primary);
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    background-color: var(--primary);
    color: var(--secondary);
    width: 100%;
    padding: 60px;
    gap: 30px;
  }
  .text {
    text-align: center;
  }
  .text h2 {
    font-size: 2rem;
  }
  .text p {
    font-size: 1.1rem;
  }

  .contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-color: var(--secondary);
    padding: 100px;
    border-radius: 20px;
    color: var(--primary);
  }
  .contact-container form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  }

  .contact-container form input,
  .contact-container form textarea {
    background: none;
    padding: 10px;
    border: 2px solid var(--primary);
    width: 500px;
    border-radius: 8px;
    font-family: var(--text-font);
    font-weight: 400;
    color: var(--primary);
    transition: all 0.2s;
  }

  .contact-container form input::placeholder,
  .contact-container form textarea::placeholder {
    color: var(--primary);
    font-family: var(--text-font);
    font-weight: 400;
  }
  .contact-container form input:hover,
  .contact-container form textarea:hover {
    background-color: var(--primary);
    border-color: #000;
    color: var(--secondary);
  }

  .contact-container form input:hover::placeholder,
  .contact-container form textarea:hover::placeholder {
    color: var(--secondary);
  }
  .contact-container form input:focus::placeholder,
  .contact-container form textarea:focus::placeholder {
    color: var(--secondary);
  }
  .contact-container form input:focus,
  .contact-container form textarea:focus {
    background-color: var(--primary);
    border-color: #000;
    color: var(--secondary);
  }

  .contact-container form textarea {
    resize: none;
  }

  .contact-container form input[type="submit"]:hover {
    background-color: var(--secondary);
    color: var(--primary);
  }
  .contact-container form input[type="submit"] {
    background-color: var(--primary);
    color: var(--secondary);
    border: 2px solid var(--primary);
    cursor: pointer;
    font-size: 1.05rem;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .contact-info__field {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .contact-info__field i {
    font-size: 1.1rem;
  }
  .contact-info__field a {
    font-size: 1.1rem;
    text-decoration: none;
    color: var(--primary);
  }
  .contact-info__field a:hover {
    text-decoration: underline;
  }
  .social-media {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  .social-media a {
    font-size: 2.3rem;
    color: var(--primary);
    transition: all 0.2s;
  }

  .social-media a:hover {
    transform: scale(1.2);
  }

  @media (max-width: 1024px) {
    .contact-container {
      flex-wrap: wrap;
    }
  }
  @media (max-width: 768px) {
    .container {
      padding: 60px 0;
    }
    .contact-container {
      width: 100%;
      border-radius: 0;
    }
    .contact-container form input,
    .contact-container form textarea {
      width: 380px;
    }
  }
  @media (max-width: 425px) {
    .contact-container form input,
    .contact-container form textarea {
      width: 300px;
    }
  }
  @media (max-width: 320px) {
    .contact-container form input,
    .contact-container form textarea {
      width: 270px;
    }
  }
`;
