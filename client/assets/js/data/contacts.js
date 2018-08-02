import faker from 'faker';

const contacts = [];

for (let i = 0; i < 10; i += 1) {
  contacts.push({
    id: faker.random.uuid(),
    name: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    },
    address: {
      streetAddress: faker.address.streetAddress(),
      zipCode: faker.address.zipCode(),
      city: faker.address.city(),
      country: faker.address.country(),
    },
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
  });
}

export default contacts;
