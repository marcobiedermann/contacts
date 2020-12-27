import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import config from './constants/config';
import './i18n';

Sentry.init({
  autoSessionTracking: true,
  dsn: 'https://42fb5185205d4277a5daa55f717ed292@o81678.ingest.sentry.io/5571815',
  environment: config.environment,
  integrations: [new Integrations.BrowserTracing()],
  release: `${config.name}@${config.version}`,
  tracesSampleRate: 1.0,
});

render(<Root />, document.getElementById('root'));
