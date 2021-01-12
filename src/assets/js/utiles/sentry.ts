import { init } from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import config from '../constants/config';

const { environment, name, version } = config;

init({
  autoSessionTracking: true,
  dsn: 'https://42fb5185205d4277a5daa55f717ed292@o81678.ingest.sentry.io/5571815',
  environment,
  integrations: [new Integrations.BrowserTracing()],
  release: `${name}@${version}`,
  tracesSampleRate: 1.0,
});

export default init;
