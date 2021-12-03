import { useState } from 'react';
import Birth from '../../components/Forms/BirthForm';
import City from '../../components/Forms/CityForm';
import Email from '../../components/Forms/EmailForm';
import Rating from '../../components/Forms/RatingForm'

import Name from '../../components/Forms/NameForm'
import Header from '../../components/Header';

import { Container, MessageArea } from './styles'
import api from '../../services/api';
import ButtonToSend from '../../components/ButtonToSend';
import Modal from '../../components/Modal';

export default function ChatBot() {

  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [birth, setBirth] = useState('')
  const [email, setEmail] = useState('')

  const [modalVisible, setModalVisible] = useState(false)


  const estadoInicial = {
    step: 1,
    name: '',
    rating: 0
  }
  const [user, setUser] = useState(estadoInicial);

  let { step, rating } = user;
  const valueRating = JSON.stringify(rating)


  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      name,
      city,
      birth,
      email,
      valueRating
    };

    try {
      await api.post('/register', data)
      setModalVisible(true)
    } catch (err) {
      alert("Erro no cadastro, tente novamente!")
    }
  }

  const handleNext = (field, value) => {
    if (step === 6) return;
    setUser(
      {
        ...user,
        [field]: value,
        step: step + 1
      }
    )
  }

  return (
    <Container>
      {modalVisible ? <Modal setModalVisible={setModalVisible} /> : null}

      <Header />

      <MessageArea>
        <Name
          setName={setName}
          handleNext={handleNext}
        />
        {step >= 2 &&
          <City
            user={user}
            setCity={setCity}
            handleNext={handleNext}
          />}

        {step >= 3 &&
          <Birth
            setBirth={setBirth}
            handleNext={handleNext}
          />}

        {step >= 4 &&
          <Email
            setEmail={setEmail}
            handleNext={handleNext}
          />}
        {step >= 5 &&
          <Rating
            handleNext={handleNext}
          />}
        {step === 6 &&
          <ButtonToSend
            setModalVisible={setModalVisible}
            handleRegister={handleRegister}
          />}

      </MessageArea>
    </Container>
  )
}
