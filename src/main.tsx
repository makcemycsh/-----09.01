import {createRoot} from 'react-dom/client';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

import {App} from './app/App';
import './app/global.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Root element #root is missing');
}

createRoot(rootElement).render(<App />);
