import React from 'react';
import DayJS from 'dayjs';
import ReactDOM from 'react-dom';
import {ImagineWeb} from './ImagineWeb';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import RelativeTime from 'dayjs/plugin/relativeTime';

DayJS.extend(RelativeTime);

ReactDOM.render(<ImagineWeb />, document.getElementById('root'));
