import { Field, Form, withFormik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import * as routes from '../../constants/routes';
import Label from '../Label';
import styles from './style.css';

const ContactEdit = (props) => {
  const { values, isSubmitting } = props;
  const { t } = useTranslation();
  const onSubmit = () => {
    const { removeContact, history, id } = values;

    removeContact(id);
    history.push(routes.CONTACTS);
  };

  return (
    <Form>
      <div className={styles.form__field}>
        <Label htmlFor="name.firstName">Firstname</Label>
        <Field className={styles.form__input} id="name.firstName" name="name.firstName" type="text" />
      </div>

      <div className={styles.form__field}>
        <Label htmlFor="name.lastName">Lastname</Label>
        <Field className={styles.form__input} id="name.lastName" name="name.lastName" type="text" />
      </div>

      <div className={styles.form__field}>
        <Label htmlFor="address.streetAddress">Street</Label>
        <Field className={styles.form__input} id="address.streetAddress" name="address.streetAddress" type="text" />
      </div>

      <div className={styles.form__field}>
        <Label htmlFor="address.zipCode">Zip</Label>
        <Field className={styles.form__input} id="address.zipCode" name="address.zipCode" type="text" />
      </div>

      <div className={styles.form__field}>
        <Label htmlFor="address.city">City</Label>
        <Field className={styles.form__input} id="address.city" name="address.city" type="text" />
      </div>

      <div className={styles.form__field}>
        <Label htmlFor="address.country">Country</Label>
        <Field className={styles.form__input} id="address.country" name="address.country" type="text" />
      </div>

      <div className={styles.form__field}>
        <Label htmlFor="email">Email</Label>
        <Field className={styles.form__input} id="email" name="email" type="email" />
      </div>

      <div className={styles.form__field}>
        <Label htmlFor="phone">Phone</Label>
        <Field className={styles.form__input} id="phone" name="phone" type="tel" />
      </div>

      <div className={styles.form__field}>
        <button type="button" onClick={onSubmit}>
          {t('common:delete')}
        </button>
      </div>

      <div className={styles.form__field}>
        <input disabled={isSubmitting} type="submit" value={t('common:save')} />
      </div>
    </Form>
  );
};

ContactEdit.propTypes = {
  isSubmitting: PropTypes.bool,
  values: PropTypes.shape(),
};

ContactEdit.defaultProps = {
  isSubmitting: false,
  values: null,
};

export default compose(
  withRouter,
  withFormik({
    mapPropsToValues: ({ t, updateContact, removeContact, history, id, name, address, email, phone }) => ({
      t,
      updateContact,
      removeContact,
      history,
      id,
      name,
      address,
      email,
      phone,
    }),
    handleSubmit({ updateContact, history, id, name, address, email, phone }) {
      const contact = {
        name,
        address,
        email,
        phone,
      };

      updateContact(id, contact);
      history.push(routes.CONTACTS);
    },
  }),
)(ContactEdit);
