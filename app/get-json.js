export function getJson(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
    //   // Success!
      console.log('req', request.responseText);
      var data = JSON.parse(request.responseText);
      callback(data);
    } else {
    //   // We reached our target server, but it returned an error
      console.log('Error, ' + request.status + ' when fetching: ' + url);
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    console.log('Connection error.');
  };

  request.send();
}
