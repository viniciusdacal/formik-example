import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().min(2).required(),
  email: Yup.string().email().required(),
});
