import ContactEditPage from '../pages/ContactEditPage';
import ContactNewPage from '../pages/ContactNewPage';
import ContactPage from '../pages/ContactPage';
import ContactsPage from '../pages/ContactsPage';
import IndexPage from '../pages/IndexPage';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import RegisterPage from '../pages/RegisterPage';
import SettingsPage from '../pages/Settings';

interface Route {
  component: any;
  exact?: boolean;
  name: string;
  path: string;
}

export const INDEX: Route = {
  component: IndexPage,
  exact: true,
  name: 'pages:home',
  path: '/',
};

export const CONTACTS: Route = {
  component: ContactsPage,
  name: 'pages:contacts',
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
  name: 'pages:new',
  path: '/contacts/new',
};

export const LOGIN: Route = {
  component: LoginPage,
  name: 'pages:login',
  path: '/login',
};

export const LOGOUT: Route = {
  component: LogoutPage,
  name: 'pages:logout',
  path: '/logout',
};

export const REGISTER: Route = {
  component: RegisterPage,
  name: 'pages:register',
  path: '/register',
};

export const SETTINGS: Route = {
  component: SettingsPage,
  name: 'pages:settings',
  path: '/settings',
};

const ROUTES: Route[] = [INDEX, CONTACTS, LOGIN, REGISTER, SETTINGS];

export default ROUTES;
