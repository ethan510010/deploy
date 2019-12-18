const secret = 'testSecret';
const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

http.createServer(function (req, res) {
  req.on('data', function(chunk) {
      let sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex');

      if (req.headers['x-hub-signature'] == sig) {
          console.log('嗨')
          exec('./deployment.sh');
      }
  });

  res.end();
}).listen(7777);