import React from 'react'
import { StyledModal, Container } from './styles'

import Neuza from '../../assets/neuza.png'
import ButtonClose from './ButtonClose'

function Modal({ setModalVisible }) {
  return (
    <Container>
      <StyledModal>
        <img src={Neuza} alt="Bot" />
        <p>
          Agradecemos pelo tempo testando esse bot muito fofo ! <br />
        </p>
        Seus dados estão seguros com a gente ❤️
        <ButtonClose setModalVisible={setModalVisible} />
      </StyledModal>
    </Container >
  )
}

export default Modal
