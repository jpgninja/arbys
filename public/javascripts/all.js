$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();

});

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';
console.log('yo!');
    // jQuery AJAX call for JSON
    $.getJSON( '/update', function( data ) {

    	var kraken,
    		poloniex;
console.log(data);

        poloniex += '<tr>';
        poloniex += '<td class="amount">' + data.last + '</td>';
        poloniex += '<td class="spread">' + parseInt((data.last * 100), 10) + '%</td>';
        poloniex += '<td class="trade"><a href="#" data-amount="' + data.last + '" data-spread="' + data.last + '">Trade</a></td>';
        poloniex += '</tr>';

        // For each item in our JSON, add a table row and cells to the content string
        // $.each(data.kraken, function(){
        //     kraken += '<tr>';
        //     kraken += '<td class="amount">' + this[0] + '</td>';
        //     kraken += '<td class="spread">' + parseInt((this[1] * 100), 10) + '%</td>';
        //     kraken += '<td class="trade"><a href="#" data-amount="' + this[0] + '" data-spread="' + this[1] + '">Trade</a></td>';
        //     kraken += '</tr>';
        // });

        // For each item in our JSON, add a table row and cells to the content string
        // $.each(data.poloniex, function(){
        //     poloniex += '<tr>';
        //     poloniex += '<td class="amount">' + this[0] + '</td>';
        //     poloniex += '<td class="spread">' + parseInt((this[1] * 100), 10) + '%</td>';
        //     poloniex += '<td class="trade"><a href="#" data-amount="' + this[0] + '" data-spread="' + this[1] + '">Trade</a></td>';
        //     poloniex += '</tr>';
        // });

        // Inject the whole content string into our existing HTML table
        // $('table.buy-kraken tbody').html(kraken);
        $('table.buy-poloniex tbody').html(poloniex);

    });
};