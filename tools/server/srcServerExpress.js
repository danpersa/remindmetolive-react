// This file configures a web server for testing the production build
// on your local machine.


import {chalkProcessing} from '../chalkConfig';
import startExpress from '../../dist/app.js';

/* eslint-disable no-console */

console.log(chalkProcessing('Opening production build...'));

startExpress();
