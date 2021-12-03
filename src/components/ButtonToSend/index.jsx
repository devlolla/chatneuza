import React from 'react'

import { Container } from './styles'

function ButtonToSend({ handleRegister }) {
  return (
    <Container>
      <button onClick={handleRegister}>
        Enviar
      </button>
    </Container>
  )
}

export default ButtonToSend
