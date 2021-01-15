import { ContactDetailProps } from '..';

const props: ContactDetailProps = {
  id: '1',
  name: {
    firstName: 'John',
    lastName: 'Doe',
  },
  address: {
    city: 'New York City',
    country: 'USA',
    streetAddress: 'Main Street',
    zipCode: '10001',
  },
  email: 'john.doe@gmail.com',
  phone: '+1 234 56789',
};

export default props;
