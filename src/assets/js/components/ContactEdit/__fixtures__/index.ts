import { ContactEditProps } from '..';

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
};

export default props;
