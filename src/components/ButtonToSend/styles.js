import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  padding: 5px;


  button {
    width: 100%;
    max-width: 240px;
    height: 50px;

    padding: 5px;


    border-radius: 8px;
    border: none;

    font-size: 20px;
    font-weight: 500;

    background: #FFD7E5;
    cursor: pointer;
    transition: 0.5s;

  }

  button:hover {
    background: #FA759E;
    transition: 0.5s;
  }
`