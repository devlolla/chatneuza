import { useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import Message from '../../Message';
import React from 'react'

import { RatingSchema } from '../../../utils/validation';
import { AiFillStar } from 'react-icons/ai';

import { Container } from '../../Message/styles';
import BtnForward from '../../Button';


function Rating({ handleNext }) {
  const [submit, setSubmit] = useState(false)

  const [/* rating */, setRating] = useState(null);
  const [hoverRating, setHoverRating] = useState(null)

  return (
    <div>
      <Message variant="bot">
        Você finalizou o teste. Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos.
      </Message>
      <Formik
        initialValues={{ rating: "" }}
        validationSchema={RatingSchema}
        onSubmit={
          submit ? "" : (values) => {
            handleNext('rating', values.rating)
            setSubmit(true);
          }
        }
      >
        {({ touched, errors }) => (
          <Form>
            <Message>
              <Container>
                {
                  [...Array(5)].map((_, index) => {
                    const rating = index + 1

                    return (
                      <label
                        key={index}
                        style={rating <= (hoverRating || rating) ? { color: 'yellow' } : { color: 'gray' }}>
                        <Field
                          type="radio"
                          name="rating"
                          value={rating}
                          onClick={() => setRating(rating)}
                          style={touched.rating && errors.rating && { borderColor: '#FF4B4B' }}
                        />
                        <AiFillStar
                          fontSize={25}
                          onMouseEnter={() => setHoverRating(rating)}
                        />
                      </label>
                    )
                  })
                }
                <BtnForward
                  error={touched.rating && errors.rating && true}
                />
              </Container>
              <ErrorMessage name="rating" component="p" />

            </Message>
          </Form>
        )}

      </Formik>
    </div>
  )
}

export default Rating

