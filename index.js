const ipfsAPI = require('ipfs-api')
const IPFSFactory = require('ipfsd-ctl')

const f = IPFSFactory.create()
let ipfsd

// start ipfs daemon
f.spawn(function (err, _ipfsd) {
  if (err) { throw err }
  ipfsd = _ipfsd
  run()
})

process.on('SIGTERM', function () {
    console.log('Stopping IPFS daemon')
    ipfsd.stop()
    process.exit(0);
});



function run() {
    const ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'}) // leaving out the arguments will default to these values
}
