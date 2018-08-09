import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditPage from './Edit';
import { removeContact } from '../../../actions/contacts';
import ContactDetail from '../../../components/ContactDetail';

const ContactPage = ({
  contacts,
  match,
  removeContact,
}) => {
  const contact = contacts.find(c => c.id === match.params.id);

  return (
    <Switch>
      <Route
        path="/contacts/:id/edit"
        component={() => (
          <EditPage
            contact={contact}
          />
        )}
      />
      <Route
        path="/contacts/:id"
        component={() => (
          <ContactDetail
            {...contact}
            removeContact={removeContact}
          />
        )}
      />
    </Switch>
  );
};

ContactPage.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
  match: PropTypes.shape(),
  removeContact: PropTypes.func,
};

ContactPage.defaultProps = {
  contacts: [],
  match: null,
  removeContact: () => {},
};

const mapDispatchToProps = dispatch => bindActionCreators({
  removeContact,
}, dispatch);

export default connect(null, mapDispatchToProps)(ContactPage);
