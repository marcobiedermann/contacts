import { ErrorMessage, Field, FieldArray, Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AddressProps } from '../Address';
import { EmailProps } from '../Email';
import Error from '../Error';
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

export interface ContactEditProps {
  initialValues: Values;
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
  validationSchema: any | (() => any);
}

function ContactEdit(props: ContactEditProps): JSX.Element {
  const { initialValues, onSubmit, validationSchema } = props;
  const { t } = useTranslation();

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {(formikProps) => {
        const { isSubmitting, values } = formikProps;

        return (
          <Form className={styles.form}>
            <fieldset>
              <legend>Name</legend>

              <div className={styles.form__field}>
                <Label htmlFor="name.firstName">Firstname</Label>
                <Field className={styles.form__input} id="name.firstName" name="name.firstName" type="text" />
                <ErrorMessage name="name.firstName" component={Error} />
              </div>

              <div className={styles.form__field}>
                <Label htmlFor="name.lastName">Lastname</Label>
                <Field className={styles.form__input} id="name.lastName" name="name.lastName" type="text" />
                <ErrorMessage name="name.lastName" component={Error} />
              </div>
            </fieldset>

            <FieldArray name="addresses">
              {(arrayHelpers) => {
                const { push, remove } = arrayHelpers;

                return (
                  <fieldset>
                    <legend>Addresses</legend>

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
                            <ErrorMessage name={`${id}.type`} component={Error} />
                          </div>

                          <div className={styles.form__field}>
                            <Label htmlFor={`${id}.value.street`}>Street</Label>
                            <Field
                              className={styles.form__input}
                              id={`${id}.value.street`}
                              name={`${id}.value.street`}
                              type="text"
                            />
                            <ErrorMessage name={`${id}.value.street`} component={Error} />
                          </div>

                          <div className={styles.form__field}>
                            <Label htmlFor={`${id}.value.zip`}>Zip</Label>
                            <Field
                              className={styles.form__input}
                              id={`${id}.value.zip`}
                              name={`${id}.value.zip`}
                              type="text"
                            />
                            <ErrorMessage name={`${id}.value.zip`} component={Error} />
                          </div>

                          <div className={styles.form__field}>
                            <Label htmlFor={`${id}.value.city`}>City</Label>
                            <Field
                              className={styles.form__input}
                              id={`${id}.value.city`}
                              name={`${id}.value.city`}
                              type="text"
                            />
                            <ErrorMessage name={`${id}.value.city`} component={Error} />
                          </div>

                          <div className={styles.form__field}>
                            <Label htmlFor={`${id}.value.country`}>Country</Label>
                            <Field
                              className={styles.form__input}
                              id={`${id}.value.country`}
                              name={`${id}.value.country`}
                              type="text"
                            />
                            <ErrorMessage name={`${id}.value.country`} component={Error} />
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
                  </fieldset>
                );
              }}
            </FieldArray>

            <FieldArray name="emails">
              {(arrayHelpers) => {
                const { push, remove } = arrayHelpers;

                return (
                  <fieldset>
                    <legend>Emails</legend>

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
                            <ErrorMessage name={`${id}.type`} component={Error} />
                          </div>

                          <div className={styles.form__field}>
                            <Label htmlFor={`${id}.value`}>Email</Label>
                            <Field
                              className={styles.form__input}
                              id={`${id}.value`}
                              name={`${id}.value`}
                              type="email"
                            />
                            <ErrorMessage name={`${id}.value`} component={Error} />
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
                  </fieldset>
                );
              }}
            </FieldArray>

            <FieldArray name="phones">
              {(arrayHelpers) => {
                const { push, remove } = arrayHelpers;

                return (
                  <fieldset>
                    <legend>Phones</legend>

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
                            <ErrorMessage name={`${id}.type`} component={Error} />
                          </div>

                          <div className={styles.form__field}>
                            <Label htmlFor={`${id}.value`}>Phone</Label>
                            <Field className={styles.form__input} id={`${id}.value`} name={`${id}.value`} type="tel" />
                            <ErrorMessage name={`${id}.value`} component={Error} />
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
                  </fieldset>
                );
              }}
            </FieldArray>

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
