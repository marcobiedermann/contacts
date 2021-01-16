import { ContactEditProps } from '..';
import validationSchema from '../../../utils/validation';

const props: ContactEditProps = {
  initialValues: {
    addresses: [
      {
        type: '',
        value: {
          city: '',
          country: '',
          street: '',
          zip: '',
        },
      },
    ],
    emails: [
      {
        type: '',
        value: '',
      },
    ],
    name: {
      firstName: '',
      lastName: '',
    },
    phones: [
      {
        type: '',
        value: '',
      },
    ],
  },
  onSubmit: () => ({}),
  validationSchema,
};

export default props;
