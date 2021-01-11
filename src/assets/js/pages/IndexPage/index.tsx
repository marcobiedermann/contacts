import React, { FC } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';

const IndexPage: FC<RouteComponentProps> = () => <Redirect to="/contacts" />;

export default IndexPage;
