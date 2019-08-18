import { Injectable } from '@angular/core';
import * as SockJs from 'sockjs-client';
import * as Stomp from 'stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private stompClient: any;
  private socketUri = 'http://localhost:8080/succour-web-socket';
  private senderEndPoint = '/app/message';
  private recieverEndPoint = '/topic/message';

  constructor() { }

  /**
   * Connects websocket service
   */
  connect() {
    const socket = new SockJs(this.socketUri);
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, (frame) => {
      // console.log(frame);
      this.stompClient.subscribe(this.recieverEndPoint, (message) => {
        console.log(message.body);
      });
    });
  }

  /**
   * Disconnects websocket service
   */
  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log('Disconnected');
  }

  /**
   * Sends message to websocket server
   * @param message String to be sent to websocket
   */
  sendMessage(message: string) {
    this.stompClient.send(this.senderEndPoint, {}, message);

  }

}
