import ContactEditPage from '../pages/ContactEditPage';
import ContactNewPage from '../pages/ContactNewPage';
import ContactPage from '../pages/ContactPage';
import ContactsPage from '../pages/ContactsPage';
import IndexPage from '../pages/IndexPage';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import RegisterPage from '../pages/RegisterPage';

interface Route {
  component: any;
  exact?: boolean;
  name: string;
  path: string;
}

export const INDEX: Route = {
  component: IndexPage,
  exact: true,
  name: 'Home',
  path: '/',
};

export const CONTACTS: Route = {
  component: ContactsPage,
  name: 'Contacts',
  path: '/contacts',
};

export const CONTACT: Route = {
  component: ContactPage,
  name: 'Contact',
  path: '/contacts/:contactId',
};

export const CONTACT_EDIT: Route = {
  component: ContactEditPage,
  name: 'Edit',
  path: '/contacts/:contactId/edit',
};

export const CONTACT_NEW: Route = {
  component: ContactNewPage,
  name: 'New',
  path: '/contacts/new',
};

export const LOGIN: Route = {
  component: LoginPage,
  name: 'Login',
  path: '/login',
};

export const LOGOUT: Route = {
  component: LogoutPage,
  name: 'Logout',
  path: '/logout',
};

export const REGISTER: Route = {
  component: RegisterPage,
  name: 'Register',
  path: '/register',
};

const ROUTES: Route[] = [INDEX, CONTACT_EDIT, CONTACT_NEW, CONTACT, CONTACTS, LOGIN, REGISTER];

export default ROUTES;
