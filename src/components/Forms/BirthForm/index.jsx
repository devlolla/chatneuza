import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import Message from '../../Message';

import { BirthSchema } from '../../../utils/validation'
import BtnForward from '../../Button';

export default function Birth({ handleNext, setBirth }) {

  const [submit, setSubmit] = useState(false)

  return (
    <div>
      <Message variant="bot">
        Legal, agora que sabemos sua cidade e estado, quando foi que você nasceu?
      </Message>
      <Formik
        initialValues={{ birth: "" }}
        validationSchema={BirthSchema}
        onSubmit={
          submit ? "" : (values) => {
            handleNext('birth', values.birth)
            setBirth(values.birth)
            setSubmit(true);
          }
        }
      >
        {({ touched, errors }) => (
          <Form>
            <Message>
              <div className="content-input">
                <Field
                  id="birth"
                  name="birth"
                  type="date"
                  max="2020-12-02"
                  placeholder="Aniversário"
                  data-testid="form-field"
                  style={touched.birth && errors.birth && { borderColor: '#FF4B4B' }}
                />
                <BtnForward
                  error={touched.birth && errors.birth && true}
                />
              </div>
              <ErrorMessage name="birth" component="p" />

            </Message>
          </Form>
        )}
      </Formik>
    </div>
  )
}


