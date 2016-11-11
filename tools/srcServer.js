/* eslint-disable */

/* Module Dependencies */
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';
import open from 'open';
import url from 'url';
import proxy from 'express-http-proxy';

/* const declaration */
const port = 8088;
const app = express();
const compiler = webpack(config);

/* Webpack configuration */
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

/* Cross browser proxy setup */
app.use('/proxy', proxy('http://localhost:8081/', {
  forwardPath: function(req, res) {
    return require('url').parse(req.url).path;
  }
}));

/* Express Routes */
app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

/* Express Server */
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

/* eslint-enable */