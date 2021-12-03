import { Container } from "./styles"
import Neuza from '../../assets/botneuza.png'

function Header() {


  return (
    <Container>
      <img src={Neuza} alt="Neuza" />
      <p>ChatNeuza</p>
    </Container>
  )
}

export default Header
