import { ContactEditProps } from '..';

const props: ContactEditProps = {
  initialValues: {
    address: {
      city: '',
      country: '',
      streetAddress: '',
      zipCode: '',
    },
    email: '',
    name: {
      firstName: '',
      lastName: '',
    },
    phone: '',
  },
  onSubmit: () => ({}),
};

export default props;
