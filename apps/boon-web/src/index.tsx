import React from 'react';
import DayJS from 'dayjs';
import {ImagineWeb} from './ImagineWeb';
import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import RelativeTime from 'dayjs/plugin/relativeTime';

DayJS.extend(RelativeTime);

const container: any = document.getElementById('root');
const root = createRoot(container);

root.render(<ImagineWeb />);
