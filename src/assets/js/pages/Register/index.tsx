import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import Label from '../../components/Label';

const RegisterPage: FC<RouteComponentProps> = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('pages:register')}</title>
      </Helmet>
      <Formik
        initialValues={{}}
        onSubmit={(_values, actions) => {
          const { setSubmitting } = actions;

          setSubmitting(false);
        }}
      >
        {(props) => {
          const { isSubmitting } = props;

          return (
            <Form>
              <div>
                <Label htmlFor="email">Email</Label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" />
              </div>

              <div>
                <button type="submit" disabled={isSubmitting}>
                  Register
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default RegisterPage;
