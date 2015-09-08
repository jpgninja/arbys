var Poloniex = require('poloniex/poloniex.js');


exports.get = function(id, cb) {

var poloniex = new Poloniex();

    poloniex.getTicker(function(err, data){
        if (err){
            // handle error
        }

        console.log(data);
        // cb(null, data);
    });

  // var docs = {
  //   kraken: [
  //     [10, Math.random()-0.5],
  //     [50, Math.random()-0.5],
  //     [100, Math.random()-0.5],
  //     [250, Math.random()-0.5],
  //     [500, Math.random()-0.5],
  //     [1000, Math.random()-0.5],
  //   ],
  //   poloniex: [
  //     [10, Math.random()-0.5],
  //     [50, Math.random()-0.5],
  //     [100, Math.random()-0.5],
  //     [250, Math.random()-0.5],
  //     [500, Math.random()-0.5],
  //     [1000, Math.random()-0.5],
  //   ]
  // };

  cb(null, docs);
}
