import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './Components/app';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
