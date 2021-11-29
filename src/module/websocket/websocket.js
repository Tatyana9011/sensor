/* eslint-disable strict */
'use strict';

import startStomp from "../../../stomp.js";
import { getDataStorage } from "../localStorage.js";
import handleMessage from "./handleMessage.js";


export function disconnectExit(client) {
    console.log('client: ', client);
    console.log('disconnectExit: ');

    if (client !== null) {
        client.disconnect();
    }
    console.log("Disconnected");
}

export let stompClient = null;

function websocket(urlUser) {

    const navigationItemExit = document.querySelector('.exit');
    const topic = getDataStorage('random');
    const urlWS = urlUser.replace(/http:\/\//, '');
    const headers = {
        /* login: 'ghbdtn',
        passcode: 'ghbdtn',
        // additional header
        'client-id': '42' */
    };

    if (topic) {

        const url = `ws://${urlWS}fsh/ws/endpoint`;
        // let ws = new WebSocket(url);
        const connectCallback = function (frame) {
            if (frame) {
                console.log('Connected:', frame);
            }
        };

        const errorCallback = function (error) {
            console.log("---------------error", JSON.stringify(error), error);
        };

        const waitForConnection = () => {
            stompClient = Stomp.client(url);
            stompClient.connect(headers, connectCallback, errorCallback);
            setTimeout(() => {
                subscribeClient();
            }, 1000);
        };

        function messageCallback(message) {
            if (message.body) {
                handleMessage(JSON.parse(message.body));
            } else {
                console.log("got empty message");
            }
        };

        function subscribeClient() {
            console.log('subscribe: ');
            stompClient.subscribe(`/topic/notifications/${topic}`, messageCallback, { ack: 'client' });
        }

        waitForConnection();
    }

    //navigationItemExit.addEventListener('click', disconnectExit.bind(this, stompClient));

}
export default websocket;
