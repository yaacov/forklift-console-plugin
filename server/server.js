const express = require('express')
const proxy = require('express-http-proxy');
const app = express()

const argv = require('minimist')(process.argv.slice(2));

const port = argv['port'] || 3000;
const server = argv['server'] || 'http://localhost:30088';
const mode = argv['mode'] || 'record';

const getProviders = {
    "openshift": [],
    "openstack": [],
    "ovirt": [],
    "vsphere": []
  }
;

const apiProxy = proxy(server, {
    userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
        data = JSON.parse(proxyResData.toString('utf8'));
        
        // parse request and decide what to do
        console.log("req url", userReq.url);

        if (mode === 'record') {
            // recode data
            console.log("data", JSON.stringify(data, null, 2));

            // return modk data
            return JSON.stringify(data);
        }
        
        if (mode === 'mock') {
            // recode data
            console.log("mock", userReq.url);

            // return modk data
            return JSON.stringify(getProviders);
        }
    }
});

// Proxy overrides
app.get('/version', (req, res) => {
  res.send('Foeklift mock server')
})

// Proxy
app.use('/', apiProxy);

app.listen(port, () => {
  console.log(`Forklift mock server: http://localhost:${port}/`)
})