import { ContactNewProps } from '..';

const props: ContactNewProps = {
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
