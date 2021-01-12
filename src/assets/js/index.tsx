import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import './i18n';
import './utiles/sentry';

render(<Root />, document.getElementById('root'));
