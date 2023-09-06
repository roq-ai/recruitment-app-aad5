import * as yup from 'yup';

export const interviewValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  status: yup.string().required(),
  employer_id: yup.string().nullable().required(),
  developer_id: yup.string().nullable().required(),
});
