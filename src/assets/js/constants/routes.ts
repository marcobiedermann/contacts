import ContactEditPage from '../pages/ContactEditPage';
import ContactNewPage from '../pages/ContactNewPage';
import ContactPage from '../pages/ContactPage';
import ContactsPage from '../pages/ContactsPage';
import IndexPage from '../pages/IndexPage';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import RegisterPage from '../pages/RegisterPage';

export const INDEX = {
  component: IndexPage,
  exact: true,
  name: 'Home',
  path: '/',
};

export const CONTACTS = {
  component: ContactsPage,
  name: 'Contacts',
  path: '/contacts',
};

export const CONTACT = {
  component: ContactPage,
  name: 'Contact',
  path: '/contacts/:contactId',
};

export const CONTACT_EDIT = {
  component: ContactEditPage,
  name: 'Edit',
  path: '/contacts/:contactId/edit',
};

export const CONTACT_NEW = {
  component: ContactNewPage,
  name: 'New',
  path: '/contacts/new',
};

export const LOGIN = {
  component: LoginPage,
  name: 'Login',
  path: '/login',
};

export const LOGOUT = {
  component: LogoutPage,
  name: 'Logout',
  path: '/logout',
};

export const REGISTER = {
  component: RegisterPage,
  name: 'Register',
  path: '/register',
};

const ROUTES = [INDEX, CONTACTS, CONTACT, CONTACT_EDIT, CONTACT_NEW, LOGIN, REGISTER];

export default ROUTES;
