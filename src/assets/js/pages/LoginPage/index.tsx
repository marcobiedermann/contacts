import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import Label from '../../components/Label';

const LoginPage: FC = (props) => {
  const { firebase } = props;

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values, actions) => {
          const { email, password } = values;

          try {
            const response = await firebase.login({
              email,
              password,
            });
            console.log(response);
          } catch (error) {
            console.error(error);
          }

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
      <button onClick={() => firebase.login({ provider: 'github', type: 'popup' })} type="button">
        Login with GitHub
      </button>
    </div>
  );
};

export default LoginPage;
