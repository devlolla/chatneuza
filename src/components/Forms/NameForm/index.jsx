import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Message from '../../Message';

import BtnForward from '../../Button';


import { NameSchema } from '../../../utils/validation'

export default function Name({ handleNext, setName }) {

  const [submit, setSubmit] = useState(false)

  return (
    <div>
      <Message variant="bot">
        Ola, eu sou a Chatneuza, tudo bem? Para começarmos, preciso saber seu nome.
      </Message>
      <Formik
        initialValues={{ name: "" }}
        validationSchema={NameSchema}
        onSubmit={
          submit ? "" : (values) => {
            handleNext('name', values.name)
            setName(values.name)
            setSubmit(true);
          }
        }
      >
        {({ touched, errors }) => (
          <Form>
            <Message>
              <div className="content-input">
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nome"
                  autoComplete="off"
                  style={touched.name && errors.name && { borderColor: '#FF4B4B' }}
                />
                <BtnForward
                  error={touched.name && errors.name && true}
                />
              </div>
              <ErrorMessage name="name" component="p" />
            </Message>
          </Form>
        )}
      </Formik>
    </div>
  )
}


