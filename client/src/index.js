import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Time from './component1/Time.js';
import Sponsored from './component2/Sponsored.js';

ReactDOM.render(<Time />, document.getElementById('time-root'))
ReactDOM.render(<Sponsored />, document.getElementById('sponsored-root'))
