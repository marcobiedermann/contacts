import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import './utils/i18n';
import './utils/sentry';

render(<Root />, document.getElementById('root'));
