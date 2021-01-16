import { array, object, SchemaOf, string } from 'yup';

interface Address {
  type: string;
  value: {
    city: string;
    country: string;
    street: string;
    zip: string;
  };
}

interface Email {
  type: string;
  value: string;
}

interface Name {
  firstName: string;
  lastName: string;
}

interface Phone {
  type: string;
  value: string;
}

interface Contact {
  addresses: Address[];
  emails: Email[];
  name: Name;
  phones: Phone[];
}

const addressSchema: SchemaOf<Address> = object()
  .shape({
    type: string().defined(),
    value: object().shape({
      city: string().defined(),
      country: string().defined(),
      street: string().defined(),
      zip: string().defined(),
    }),
  })
  .defined();

const emailSchema: SchemaOf<Email> = object()
  .shape({
    type: string().defined(),
    value: string().defined(),
  })
  .defined();

const nameSchema: SchemaOf<Name> = object()
  .shape({
    firstName: string().defined(),
    lastName: string().defined(),
  })
  .defined();

const phoneSchema: SchemaOf<Phone> = object().shape({
  type: string().defined(),
  value: string().defined(),
});

const contactSchema: SchemaOf<Contact> = object()
  .shape({
    addresses: array().of(addressSchema),
    emails: array().of(emailSchema),
    name: nameSchema,
    phones: array().of(phoneSchema),
  })
  .defined();

export default contactSchema;
