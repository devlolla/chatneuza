import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import Message from '../../Message';

import { CitySchema } from '../../../utils/validation'
import BtnForward from '../../Button';

export default function City({ user, handleNext, setCity }) {

  const [submit, setSubmit] = useState(false)

  const { name } = user

  return (
    <div>
      <Message variant="bot">
        Que satisfação, {name}.
        Agora que sei o seu nome, qual a cidade e estado que voce mora?
      </Message>
      <Formik
        initialValues={{
          city: "",
        }}
        validationSchema={CitySchema}
        onSubmit={
          submit ? "" : (values) => {
            handleNext('city', values.city)
            setCity(values.city)
            setSubmit(true);
          }
        }
      >
        {({ touched, errors }) => (
          <Form>
            <Message>
              <div className="content-input">
                <Field
                  style={touched.city && errors.city && { borderColor: '#FF4B4B' }}
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Cidade"
                  autoComplete="off"

                />
                <BtnForward
                  error={touched.city && errors.city && true}
                />
              </div>
              <ErrorMessage name="city" component="p" />
            </Message>
          </Form>
        )}
      </Formik>
    </div>
  )
}


