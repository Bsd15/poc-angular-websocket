import { Injectable } from '@angular/core';
import * as SockJs from 'sockjs-client';
import * as Stomp from 'stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  connect() {
    const socket = new SockJs('http://localhost:8080/succour-web-socket');
    const stompClient = Stomp.over(socket);
    //   stompClient.connect({}, function (frame) {
    //     setConnected(true);
    //     console.log('Connected: ' + frame);
    //     stompClient.subscribe('/topic/message', function (greeting) {
    //         showGreeting(greeting.body);
    //     });
    // });
    stompClient.connect({}, (frame) => {
      console.log(frame);
    });
  }
}
