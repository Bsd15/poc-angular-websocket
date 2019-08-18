import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';
import { MessageComponent } from '../message/message.component';
import { PlaceholderDirective } from '../directives/placeholder.directive';


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css'],
  providers: [WebsocketService]
})
export class ChatBoxComponent implements OnInit {

  private recievedMessage: string;
  @ViewChild(PlaceholderDirective, {static: false}) messageHost: PlaceholderDirective;

  constructor(private websocketService: WebsocketService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.websocketService.connect();
    this.websocketService.getMessage().subscribe(
      (message) => {
        const messageComponentFacotory = this.componentFactoryResolver.resolveComponentFactory(MessageComponent);
        const messageHostViewContainerRef = this.messageHost.viewContainerRef;
        const messageRef = messageHostViewContainerRef.createComponent(messageComponentFacotory);
        messageRef.instance.message = message;
      }
    );
  }

  sendMessage(message: string) {
    message = message.trim();
    // Ref https://stackoverflow.com/a/5487027 for use of below condition.
    if (!!message)  {
      console.log(message);
      this.websocketService.sendMessage(message);
    } else {
      console.log('Empty Message');
    }
  }

}
