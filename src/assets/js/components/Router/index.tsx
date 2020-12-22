import React, { FC } from 'react';
import { BrowserRouter, Route, RouteComponentProps, Switch } from 'react-router-dom';
import Layout from '../Layout';

export interface RouterProps {
  routes: {
    exact?: boolean;
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    name: string;
    path: string;
  }[];
}

const Router: FC<RouterProps> = (props) => {
  const { routes } = props;

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route) => {
            const { path } = route;

            return <Route key={path} {...route} />;
          })}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
