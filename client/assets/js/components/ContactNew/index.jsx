import { withFormik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { translate } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import styles from './style.css';
import Label from '../Label';
import * as routes from '../../constants/routes';

const ContactNew = ({
  isSubmitting,
  values,
}) => (
  <Form className={styles.form}>
    <div className={styles.form__field}>
      <Label
        htmlFor="name.firstName"
      >
        Firstname
      </Label>
      <Field
        className={styles.form__input}
        id="name.firstName"
        name="name.firstName"
        type="text"
      />
    </div>

    <div className={styles.form__field}>
      <Label
        htmlFor="name.lastName"
      >
        Lastname
      </Label>
      <Field
        className={styles.form__input}
        id="name.lastName"
        name="name.lastName"
        type="text"
      />
    </div>

    <div className={styles.form__field}>
      <Label
        htmlFor="address.streetAddress"
      >
        Street
      </Label>
      <Field
        className={styles.form__input}
        id="address.streetAddress"
        name="address.streetAddress"
        type="text"
      />
    </div>

    <div className={styles.form__field}>
      <Label
        htmlFor="address.zipCode"
      >
        Zip
      </Label>
      <Field
        className={styles.form__input}
        id="address.zipCode"
        name="address.zipCode"
        type="text"
      />
    </div>

    <div className={styles.form__field}>
      <Label
        htmlFor="address.city"
      >
        City
      </Label>
      <Field
        className={styles.form__input}
        id="address.city"
        name="address.city"
        type="text"
      />
    </div>

    <div className={styles.form__field}>
      <Label
        htmlFor="address.country"
      >
        Country
      </Label>
      <Field
        className={styles.form__input}
        id="address.country"
        name="address.country"
        type="text"
      />
    </div>

    <div className={styles.form__field}>
      <Label
        htmlFor="email"
      >
        Email
      </Label>
      <Field
        className={styles.form__input}
        id="email"
        name="email"
        type="email"
      />
    </div>

    <div className={styles.form__field}>
      <Label
        htmlFor="phone"
      >
        Phone
      </Label>
      <Field
        className={styles.form__input}
        id="phone"
        name="phone"
        type="tel"
      />
    </div>

    <div className={styles.form__field}>
      <input
        disabled={isSubmitting}
        type="submit"
        value={values.t('save')}
      />
    </div>
  </Form>
);

ContactNew.propTypes = {
  isSubmitting: PropTypes.bool,
  values: PropTypes.shape(),
};

ContactNew.defaultProps = {
  isSubmitting: false,
  values: null,
};

export default compose(
  translate('common'),
  withRouter,
  withFormik({
    mapPropsToValues: ({ t, addContact, history }) => ({
      t,
      addContact,
      history,
      name: {
        firstName: '',
        lastName: '',
      },
      address: {
        streetAddress: '',
        zipCode: '',
        city: '',
        country: '',
      },
      email: '',
      phone: '',
    }),
    handleSubmit({
      addContact,
      history,
      name,
      address,
      email,
      phone,
    }) {
      const contact = {
        name,
        address,
        email,
        phone,
      };

      addContact(contact);
      history.push(routes.CONTACTS);
    },
  }),
)(ContactNew);
