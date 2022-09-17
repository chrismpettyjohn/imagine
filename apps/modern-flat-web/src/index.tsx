import React from 'react';
import DayJS from 'dayjs';
import ReactDOM from 'react-dom';
import {ImagineWeb} from './ImagineWeb';
import "react-multi-carousel/lib/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import RelativeTime from 'dayjs/plugin/relativeTime';

DayJS.extend(RelativeTime);

ReactDOM.render(<ImagineWeb />, document.getElementById('root'));
