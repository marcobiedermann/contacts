/* eslint-disable react/no-array-index-key */

import { ErrorMessage, Field, FieldArray, Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AddressProps } from '../Address';
import { EmailProps } from '../Email';
import Label from '../Label';
import { PhoneProps } from '../Phone';
import styles from './style.module.css';

export interface Values {
  addresses: AddressProps[];
  emails: EmailProps[];
  name: {
    firstName: string;
    lastName: string;
  };
  phones: PhoneProps[];
}

export interface ContactNewProps {
  initialValues: Values;
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
  validationSchema: any | (() => any);
}

const ContactNew: FC<ContactNewProps> = (props) => {
  const { initialValues, onSubmit, validationSchema } = props;
  const { t } = useTranslation();

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {(formikProps) => {
        const { isSubmitting, values } = formikProps;

        return (
          <Form className={styles.form}>
            <div className={styles.form__field}>
              <Label htmlFor="name.firstName">Firstname</Label>
              <Field className={styles.form__input} id="name.firstName" name="name.firstName" type="text" />
              <ErrorMessage name="name.firstName" component="div" />
            </div>

            <div className={styles.form__field}>
              <Label htmlFor="name.lastName">Lastname</Label>
              <Field className={styles.form__input} id="name.lastName" name="name.lastName" type="text" />
              <ErrorMessage name="name.lastName" component="div" />
            </div>

            <FieldArray name="addresses">
              {(arrayHelpers) => {
                const { push, remove } = arrayHelpers;

                return (
                  <div>
                    {values.addresses.map((_address, index) => {
                      const id = `addresses.${index}`;

                      return (
                        <div key={id}>
                          <div className={styles.form__field}>
                            <Label htmlFor={`${id}.type`}>Type</Label>
                            <Field as="select" className={styles.form__input} id={`${id}.type`} name={`${id}.type`}>
                              <option value="home">Home</option>
                              <option value="work">Work</option>
                            </Field>
                            <ErrorMessage name={`${id}.type`} component="div" />
                          </div>

                          <div className={styles.form__field}>
                            <Label htmlFor={`${id}.value.street`}>Street</Label>
                            <Field
                              className={styles.form__input}
                              id={`${id}.value.street`}
                              name={`${id}.value.street`}
                              type="text"
                            />
                            <ErrorMessage name={`${id}.value.street`} component="div" />
                          </div>

                          <div className={styles.form__field}>
                            <Label htmlFor={`${id}.value.zip`}>Zip</Label>
                            <Field
                              className={styles.form__input}
                              id={`${id}.value.zip`}
                              name={`${id}.value.zip`}
                              type="text"
                            />
                            <ErrorMessage name={`${id}.value.zip`} component="div" />
                          </div>

                          <div className={styles.form__field}>
                            <Label htmlFor={`${id}.value.city`}>City</Label>
                            <Field
                              className={styles.form__input}
                              id={`${id}.value.city`}
                              name={`${id}.value.city`}
                              type="text"
                            />
                            <ErrorMessage name={`${id}.value.city`} component="div" />
                          </div>

                          <div className={styles.form__field}>
                            <Label htmlFor={`${id}.value.country`}>Country</Label>
                            <Field
                              className={styles.form__input}
                              id={`${id}.value.country`}
                              name={`${id}.value.country`}
                              type="text"
                            />
                            <ErrorMessage name={`${id}.value.country`} component="div" />
                          </div>

                          <button type="button" onClick={() => remove(index)}>
                            -
                          </button>
                        </div>
                      );
                    })}

                    <button
                      type="button"
                      onClick={() =>
                        push({
                          type: '',
                          value: {
                            city: '',
                            country: '',
                            street: '',
                            zip: '',
                          },
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                );
              }}
            </FieldArray>

            <FieldArray name="emails">
              {(arrayHelpers) => {
                const { push, remove } = arrayHelpers;

                return (
                  <div>
                    {values.emails.map((_email, index) => {
                      const id = `emails.${index}`;

                      return (
                        <div key={id}>
                          <div className={styles.form__field}>
                            <Label htmlFor={`${id}.type`}>Type</Label>
                            <Field as="select" className={styles.form__input} id={`${id}.type`} name={`${id}.type`}>
                              <option value="home">Home</option>
                              <option value="work">Work</option>
                            </Field>
                            <ErrorMessage name={`${id}.type`} component="div" />
                          </div>

                          <div className={styles.form__field}>
                            <Label htmlFor={`${id}.value`}>Email</Label>
                            <Field
                              className={styles.form__input}
                              id={`${id}.value`}
                              name={`${id}.value`}
                              type="email"
                            />
                            <ErrorMessage name={`${id}.value`} component="div" />
                          </div>

                          <button type="button" onClick={() => remove(index)}>
                            -
                          </button>
                        </div>
                      );
                    })}

                    <button
                      type="button"
                      onClick={() =>
                        push({
                          type: '',
                          value: '',
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                );
              }}
            </FieldArray>

            <FieldArray name="phones">
              {(arrayHelpers) => {
                const { push, remove } = arrayHelpers;

                return (
                  <div>
                    {values.phones.map((_phone, index) => {
                      const id = `phones.${index}`;

                      return (
                        <div key={id}>
                          <div className={styles.form__field}>
                            <Label htmlFor={`${id}.type`}>Type</Label>
                            <Field as="select" className={styles.form__input} id={`${id}.type`} name={`${id}.type`}>
                              <option value="home">Home</option>
                              <option value="work">Work</option>
                            </Field>
                            <ErrorMessage name={`${id}.type`} component="div" />
                          </div>

                          <div className={styles.form__field}>
                            <Label htmlFor={`${id}.value`}>Phone</Label>
                            <Field className={styles.form__input} id={`${id}.value`} name={`${id}.value`} type="tel" />
                            <ErrorMessage name={`${id}.value`} component="div" />
                          </div>

                          <button type="button" onClick={() => remove(index)}>
                            -
                          </button>
                        </div>
                      );
                    })}

                    <button
                      type="button"
                      onClick={() =>
                        push({
                          type: '',
                          value: '',
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                );
              }}
            </FieldArray>

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
