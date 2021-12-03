import React from 'react'

import { Button } from './styles'

function ButtonClose({ setModalVisible }) {

  function handleClose() {
    setModalVisible(false)
    window.location.reload()

  }

  return (
    <Button
      onClick={() => handleClose()}
    >
      Fechar
    </Button>
  )
}

export default ButtonClose
