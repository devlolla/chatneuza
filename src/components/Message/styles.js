import styled from 'styled-components'


export const BotMessage = styled.div`
  width: 100%;
  max-width: 329px;

  height: 100%;
  max-height: 100px;

  border-radius: 10px 10px 0 10px;
  padding: 10px 15px;

  background: #FFEEEE;

  font-size: 16px;
  line-height: 21px;
`

export const ContainerBot = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: flex-end;

  margin-top: 10px;
  margin-bottom: 10px;

`

export const ContainerUser = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  margin-top: 10px;
  margin-bottom: 10px;

`

export const UserMessage = styled(BotMessage)`
  background: #40414E;
  border-radius: 10px 10px 10px 0;

  input {
    width: 50%;
    
    font-size: 17px;
    color: #ffffff;
    
    border: 1px solid #40414E;
    border-radius: 5px;
    outline: none;
    
    background: none;
    
    margin: 2px;
    padding: 8px;
  }

  input::placeholder {
    color: #7C7C7C;
  }

  .content-state {
    display: flex;
    width: 100%;
  }

  .content-state select {
    
    font-size: 17px;
    color: #2E2F3C;
    
    border: 1px solid #2E2F3C;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    
    margin: 2px;
    padding: 8px;
    
    background: #F6F6F6;

  }

  .content-input {
    display: flex;
    justify-content: space-between;

  }

  p {
    font-size: 12px !important;
    font-weight: 300;
    color: #FF4B4B ;
    padding-left: 5px;

  }

  .content-stars {
    display: flex;
    
  }
`

export const Container = styled.div`
    width: 100%;
    height: 45px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    label{
      padding: 5px;
      cursor: pointer;
    }

    input[type = "radio"] {
        display: none;
    }
`