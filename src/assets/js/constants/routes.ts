import { lazy } from 'react';

interface Route {
  component: any;
  exact?: boolean;
  name: string;
  path: string;
}

export const INDEX: Route = {
  component: lazy(() => import('../pages/IndexPage')),
  exact: true,
  name: 'pages:home',
  path: '/',
};

export const CONTACTS: Route = {
  component: lazy(() => import('../pages/ContactsPage')),
  name: 'pages:contacts',
  path: '/contacts',
};

export const CONTACT: Route = {
  component: lazy(() => import('../pages/ContactPage')),
  name: 'pages:contact',
  path: '/contacts/:contactId',
};

export const CONTACT_EDIT: Route = {
  component: lazy(() => import('../pages/ContactEditPage')),
  name: 'pages:edit',
  path: '/contacts/:contactId/edit',
};

export const CONTACT_NEW: Route = {
  component: lazy(() => import('../pages/ContactNewPage')),
  name: 'pages:new',
  path: '/contacts/new',
};

export const LOGIN: Route = {
  component: lazy(() => import('../pages/LoginPage')),
  name: 'pages:login',
  path: '/login',
};

export const LOGOUT: Route = {
  component: lazy(() => import('../pages/LogoutPage')),
  name: 'pages:logout',
  path: '/logout',
};

export const REGISTER: Route = {
  component: lazy(() => import('../pages/RegisterPage')),
  name: 'pages:register',
  path: '/register',
};

export const SETTINGS: Route = {
  component: lazy(() => import('../pages/Settings')),
  name: 'pages:settings',
  path: '/settings',
};

const ROUTES: Route[] = [INDEX, CONTACTS, LOGIN, LOGOUT, REGISTER, SETTINGS];

export default ROUTES;
