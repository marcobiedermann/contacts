import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Label from '../Label';
import styles from './style.module.css';

export interface Values {
  address: {
    city: string;
    country: string;
    streetAddress: string;
    zipCode: string;
  };
  email: string;
  name: {
    firstName: string;
    lastName: string;
  };
  phone: string;
}

export interface ContactNewProps {
  initialValues: Values;
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
}

const ContactNew: FC<ContactNewProps> = (props) => {
  const { initialValues, onSubmit } = props;
  const { t } = useTranslation();

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps) => {
        const { isSubmitting } = formikProps;

        return (
          <Form className={styles.form}>
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

export default ContactNew;
