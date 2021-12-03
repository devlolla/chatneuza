import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 320px;
  
  display: flex;
  align-items: center;
  justify-content: center;

`

export const StyledModal = styled.div`
  width: 100%;
  max-width: 320px;
  height: 400px;
  
  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 8px;
  
  position: absolute;
  top: 19%;
  
  box-sizing: border-box;
  background: white;
  
  img {
    width: 100%;
    max-width: 96px;
    padding: 45px;
  }

  p {
    width: 100%;
    max-width: 350px;
    padding: 0 45px 45px;

    font-size: 18px;
    line-height: 25px;

    text-align: center;
  }
`

export const Button = styled.button`
  width: 100%;
  max-width: 100px;

  height: 40px;

  padding: 5px;
  margin: 30px;

  border: none ;
  border-radius: 8px;

  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  
  background: #FFD7E5;
  transition: 0.5s;
  
  &:hover {
    background: #FA759E;
    transition: 0.5s;
    color: #ffffff;
  }
`
