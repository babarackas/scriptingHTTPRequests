var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

function getAndPrintHTML (options) {


  https.get(options, function (response) {
  // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    var buff = '';

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      buff += data;
      console.log(buff + "\n");
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });


};

getAndPrintHTML(requestOptions);