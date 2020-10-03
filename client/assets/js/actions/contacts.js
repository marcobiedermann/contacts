import { ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACT } from '../constants/action-types';

export const addContact = (props) => ({
  type: ADD_CONTACT,
  props,
});

export const removeContact = (id) => ({
  type: REMOVE_CONTACT,
  id,
});

export const updateContact = (id, props) => ({
  type: UPDATE_CONTACT,
  id,
  props,
});
