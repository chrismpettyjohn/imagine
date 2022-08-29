import React from 'react';
import {ImagineWeb} from './ImagineWeb';
import { createRoot } from 'react-dom/client';

// @ts-ignore
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<ImagineWeb />);
