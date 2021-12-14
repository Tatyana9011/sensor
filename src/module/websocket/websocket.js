/* eslint-disable strict */
'use strict';

import startStomp from "../../../stomp.js";
import { getDataStorage } from "../localStorage.js";
import handleMessage from "./handleMessage.js";


export function disconnectExit(client) {

    if (client !== null) {
        client.disconnect();
    }

}

export let stompClient = null;

function websocket(urlUser) {

    const topic = getDataStorage('random');
    const urlWS = urlUser.replace(/http:\/\//, '');
    const headers = {};

    if (topic) {

        const url = `ws://${urlWS}fsh/ws/endpoint`;
        const connectCallback = function(frame) {
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
                console.log('message.: ', message.body);
                handleMessage(JSON.parse(message.body));
            } else {
                console.log("got empty message");
            }
        };

        function subscribeClient() {
            stompClient.subscribe(`/topic/notifications/${topic}`, messageCallback, { ack: 'client' });
        }

        waitForConnection();
    }

}
export default websocket;
