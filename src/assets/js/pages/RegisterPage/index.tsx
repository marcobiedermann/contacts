import { ErrorMessage, Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Label from '../../components/Label';

const RegisterPage = () => {
  return (
    <Formik
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
      }}
      render={(props) => {
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
              <input type="submit" disabled={isSubmitting} />
            </div>
          </Form>
        );
      }}
    />
  );
};

RegisterPage.propTypes = {
  isSubmitting: PropTypes.bool,
};

RegisterPage.defaultProps = {
  isSubmitting: false,
};

export default RegisterPage;
