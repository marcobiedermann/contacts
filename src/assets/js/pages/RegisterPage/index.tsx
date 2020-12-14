import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import Label from '../../components/Label';

const RegisterPage: FC = () => {
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

export default RegisterPage;
