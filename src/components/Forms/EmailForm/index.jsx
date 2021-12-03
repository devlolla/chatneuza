import { useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import Message from '../../Message';
import BtnForward from '../../Button';

import { EmailSchema } from '../../../utils/validation'

export default function Email({ handleNext, setEmail }) {

  const [submit, setSubmit] = useState(false)

  return (
    <div>
      <Message variant="bot">
        Agora me fala seu e-mail, por gentileza.
      </Message>

      <Formik
        initialValues={{ email: "" }}
        validationSchema={EmailSchema}
        onSubmit={
          submit ? "" : (values) => {
            handleNext('email', values.email)
            setEmail(values.email)
            setSubmit(true);
          }
        }
      >
        {({ touched, errors }) => (
          <Form>
            <Message>
              <div className="content-input">
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  style={touched.email && errors.email && { borderColor: '#FF4B4B' }}
                />
                <BtnForward
                  error={touched.email && errors.email && true}
                />
              </div>
              <ErrorMessage name="email" component="p" />

            </Message>
          </Form>
        )}
      </Formik>
    </div>
  )
}


