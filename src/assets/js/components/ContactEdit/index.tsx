import { Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useFirestore } from 'reactfire';
import Label from '../Label';
import styles from './style.module.css';

export interface ContactEditProps {
  id: string;
}

const ContactEdit: FC<ContactEditProps> = (props) => {
  const { id } = props;
  const firestore = useFirestore;
  const ref = firestore().doc(`contacts/${id}`);
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={props}
      onSubmit={(values, actions) => {
        const { setSubmitting } = actions;

        ref.update(values);

        setSubmitting(false);
      }}
    >
      {(formikProps) => {
        const { isSubmitting } = formikProps;

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
              <Field
                className={styles.form__input}
                id="address.streetAddress"
                name="address.streetAddress"
                type="text"
              />
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
              <button type="button">{t('common:delete')}</button>
            </div>

            <div className={styles.form__field}>
              <button disabled={isSubmitting} type="submit">
                {t('common:save')}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactEdit;
