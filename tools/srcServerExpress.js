import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.server';
import open from 'open';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../src/routes';

/* eslint-disable no-console */
const port = 3005;
const app = express();

console.log("XXXX starting");

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


// view engine setup
app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
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
      return res.render('index', { title: 'Express', reactOutput: markup});
    }
  );
});

app.get('/xx', function(req, res) {
  console.log('request for xxx');
  res.render('index', { title: 'Express', reactOutput: 'AAAA'});
});


app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
