import { ContactDetailProps } from '..';
import address from '../../Address/__fixtures__';

const props: ContactDetailProps = {
  id: '1',
  name: {
    firstName: 'John',
    lastName: 'Doe',
  },
  address,
  email: 'john.doe@gmail.com',
  phone: '+1 234 56789',
};

export default props;
