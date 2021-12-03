import React from 'react'

import { IoMdSend } from 'react-icons/io';
import { Button } from './styles';


function BtnForward({ error }) {
  return (
    <Button type="submit" error={error}>
      <IoMdSend size={32} />
    </Button>
  )
}

export default BtnForward
