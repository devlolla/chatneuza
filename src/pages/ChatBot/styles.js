import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  background: #E5E5E5;

`

export const MessageArea = styled.div`
  width: 100%;
  max-width: 428px;
  height: 100%;
  max-height: 550px;
  
  border-radius: 0px 0px 5px 5px;
  box-sizing: border-box;
  background: #242531;

  padding: 10px;
  
  overflow: auto;

  ::-webkit-scrollbar-track {
    background-color: #242531;
}
  ::-webkit-scrollbar {
      width: 6px;
      background: #2E2F3B;
  }
  ::-webkit-scrollbar-thumb {
      background: #2E2F3B;
  }
`