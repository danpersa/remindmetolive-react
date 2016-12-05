import express from 'express';

import path from 'path';

import open from 'open';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../src/routes';

/* eslint-disable no-console */
export default function startExpress() {

  const port = 3005;
  const theapp = express();

  console.log("XXXX starting");


  // view engine setup
  //theapp.set('views', path.join(__dirname, '../src/views'));
  //theapp.set('view engine', 'ejs');

  theapp.use(express.static(path.join(__dirname, '.')));

  theapp.get('*', (req, res) => {
    match(
      {routes, location: req.url },
      (err, redirectLocation, renderProps) => {
        console.log('XXX matched!!! ');

        // // in case of error display the error message
        if (err) {
          return res.status(500).send(err.message);
        }

        // in case of redirect propagate the redirect to the browser
        if (redirectLocation) {
          return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        // generate the React markup for the current route
        let markup;
        if (renderProps) {
          // if the current route matched we have renderProps
          markup = renderToString(<RouterContext {...renderProps}/>);
        } else {
          // otherwise we can render a 404 page
          //markup = renderToString(<NotFoundPage/>);
          res.status(404);
        }

        // render the index template with the embedded React markup
        console.log('XXX matched!!! ' + markup + 'end');

        return res.send(markup);
        //return res.render('index', { title: 'Express', reactOutput: markup});
      }
    );
  });

  theapp.get('/xx', function(req, res) {
    console.log('request for xxx');
    res.render('index', { title: 'Express', reactOutput: 'AAAA'});
  });



  theapp.listen(port, function(err) {
    if (err) {
      console.log(err);
    } else {
      open(`http://localhost:${port}`);
    }
  });
}
