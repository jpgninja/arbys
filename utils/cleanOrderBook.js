var Promise = require('bluebird');
module.exports = function cleanOrderBook(orderBook, exchange){

  var i;
  var cleanArray = [];
  var bidsTotal = 0;
  var asksTotal = 0;
  var bidsUntil = orderBook.bids.length;
  var asksUntil = orderBook.asks.length;
  var cleanOrderBook = {
    bids: [],
    asks: []
  };

  switch (exchange) {
    case 'poloniex':
      cleanOrderBook = orderBook;

      for (i=0;i<bidsUntil;i=i+1) {
        bidsTotal += Number(orderBook.bids[i][1]);
        cleanOrderBook.bids[i].push(bidsTotal);
      }
      for (i=0;i<asksUntil;i=i+1) {
        asksTotal += Number(orderBook.asks[i][1]);
        cleanOrderBook.asks[i].push(asksTotal);
      }

      break;
    case 'kraken':
      for (i=0;i<bidsUntil;i=i+1) {
        bidsTotal += Number(orderBook.bids[i][1]);
        cleanArray = [
          Number(orderBook.bids[i][0]), 
          Number(orderBook.bids[i][1]),
          bidsTotal
        ];
        cleanOrderBook.bids.push(cleanArray);
      }
      for (i=0;i<asksUntil;i=i+1) {
        asksTotal += Number(orderBook.asks[i][1]);
        cleanArray = [
          Number(orderBook.asks[i][0]), 
          Number(orderBook.asks[i][1]),
          asksTotal
        ];
        cleanOrderBook.asks.push(cleanArray);
      }

      break;
    default:

  }

  return cleanOrderBook;
}