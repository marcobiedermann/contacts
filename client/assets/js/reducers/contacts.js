import contactsData from '../data/contacts.json';

const initialState = contactsData;

const contacts = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default contacts;
