import * as yup from 'yup';

export const developerValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  skills: yup.string().required(),
  job_title: yup.string().required(),
});
