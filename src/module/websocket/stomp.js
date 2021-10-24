/* eslint-disable strict */
'use strict';

const stomp =  => {

  let Stomp = require('@stomp/stompjs');

  const url = "ws://127.0.0.1/:15674/ws";
  const client = Stomp.client(url);

  const connectCallback = function () {
    // called back after the client is connected and authenticated to the STOMP server
  };
  const errorCallback = function (error) {
    // display the error's message header:
    alert(error.headers.message);
  };
  const headers = {
    login: 'mylogin',
    passcode: 'mypasscode',
    // additional header
    'client-id': 'my-client-id'
  };
  client.connect(headers, connectCallback);
  client.disconnect(function () {
    alert("See you next time!");
  });

};

export default stomp;

