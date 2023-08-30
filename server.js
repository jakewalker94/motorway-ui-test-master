'use strict';

const app = require('express')();
const images = require('./src/images.json');
const { performance } = require("perf_hooks");

// removed setTimeout which was delaying the return of the response.
app.get('/images', ({ query }, res) => {
  // monitor start time
  performance.mark("start");
  const i = (query.limit) ? images.slice(0, parseInt(query.limit)) : images;
  // monitor end time and print to console
  performance.mark("end");
  console.log(performance.measure('Measure server response time', "start", "end"));
  // return response
  return res.status(200).json(i);
});

app.listen(5000, () => {
  process.stdout.write('Server is available on http://localhost:5000/\n');
});
