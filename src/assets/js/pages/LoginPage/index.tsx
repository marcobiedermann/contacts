import React, { FC } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { RouteComponentProps } from 'react-router-dom';
import { useAuth } from 'reactfire';

const LoginPage: FC<RouteComponentProps> = () => {
  const auth = useAuth;

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
      {/* <Formik
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
      </button> */}
    </div>
  );
};

export default LoginPage;
