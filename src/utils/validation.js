import * as yup from 'yup';

export const NameSchema = yup.object().shape({
  name: yup.string().required("É necessário preencher o campo.").min(3)
})

export const CitySchema = yup.object().shape({
  city: yup.string().required("É necessário preencher o campo.").min(2),
})

export const BirthSchema = yup.object().shape({
  birth: yup.date().max(new Date(), "Confira novamente sua data.").required("Informe sua data corretamente")
})

export const EmailSchema = yup.object().shape({
  email: yup.string().email("Informe um e-mail valido.").required("É necessário preencher o campo.")
})

export const RatingSchema = yup.object().shape({
  rating: yup.number().min(1).max(6).required("Sua avalição é muito importante!")
})