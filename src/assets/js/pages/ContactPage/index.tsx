import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactDetail from '../../components/ContactDetail';
import EditPage from '../ContactEditPage';

const ContactPage: FC = (props) => {
  const { contact } = props;

  return (
    <Switch>
      <Route path="/contacts/:id/edit" component={() => <EditPage contact={contact} />} />
      <Route path="/contacts/:id" component={() => <ContactDetail {...contact} />} />
    </Switch>
  );
};

export default ContactPage;
