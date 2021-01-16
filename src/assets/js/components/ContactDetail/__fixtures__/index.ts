import { ContactDetailProps } from '..';
import address from '../../Address/__fixtures__';
import email from '../../Email/__fixtures__';
import phone from '../../Phone/__fixtures__';

const props: ContactDetailProps = {
  id: '1',
  name: {
    firstName: 'John',
    lastName: 'Doe',
  },
  addresses: [address],
  emails: [email],
  phones: [phone],
};

export default props;
