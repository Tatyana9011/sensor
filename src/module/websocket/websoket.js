/* eslint-disable strict */
'use strict';

//const Stomp = require('@stomp/stompjs');


function websocket() {
    console.log('websocket: ');

    const ws = new WebSocket('ws://192.168.99.244:9993/fsh/ws/endpoint');

    //изменяем статус на странице
    function setStatus(value) {
        const status = document.getElementById('status');
        if (status) {
            status.innerHTML = value;
        }
    }
    //выводим сообщение на страницу
    function printMessage(value) {
        console.log('value: ', value);

        /* 
                if (typeof value !== 'string') {
                    console.log('value: ', value);
                    let reader = new FileReader();
        
                    reader.addEventListener("load", function (e) {
                        console.log(e.target.value);
                    });
                    reader.readAsText(value);
        
                } */
    }
    ws.onopen = function () {
        ws.send(JSON.stringify({ "command": "subscribe", "identifier": "/topic/notifications/12345" }));
        console.log('ONLINE');
    };

    ws.onclose = function (event) {
        let str = '';
        if (event.wasClean) {
            str = 'Соединение закрыто чисто';
            alert('Соединение закрыто чисто');
        } else {
            str = 'Обрыв соединения';// например, "убит" процесс сервера
            alert('Обрыв соединения');
        }
        str = 'Код: ' + event.code + ' причина: ' + event.reason;
        alert('Код: ' + event.code + ' причина: ' + event.reason);
        setStatus(str);
    };

    ws.onmessage = function (event) {
        printMessage(event.data);
    };

    ws.onerror = function (error) {
        setStatus("Ошибка " + error.message);
    };
}
export default websocket;
