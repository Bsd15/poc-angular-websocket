import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild
} from "@angular/core";
import { WebsocketService } from "../services/websocket.service";
import { MessageComponent } from "../message/message.component";
import { PlaceholderDirective } from "../directives/placeholder.directive";

@Component({
  selector: "app-chat-box",
  templateUrl: "./chat-box.component.html",
  styleUrls: ["./chat-box.component.css"],
  providers: [WebsocketService]
})
export class ChatBoxComponent implements OnInit {
  private recievedMessage: string;
  private userName: string;
  private toUser: string;
  private showForm = false;
  private showUserForm = true;
  private showToUserForm = false;
  @ViewChild(PlaceholderDirective, { static: false })
  messageHost: PlaceholderDirective;

  constructor(
    private websocketService: WebsocketService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.websocketService.getMessage().subscribe(message => {
      this.createAndAddMessageComponent(JSON.parse(message));
    });
  }

  /**
   * Creates and add message component
   * @param message JSON object for creating Message component
   */
  createAndAddMessageComponent(message) {
    // Dynamically add message components to message-box
    const messageComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
      MessageComponent
    );
    const messageHostViewContainerRef = this.messageHost.viewContainerRef;
    const messageRef = messageHostViewContainerRef.createComponent(
      messageComponentFactory
    );
    messageRef.instance.userName = message.userName;
    messageRef.instance.message = message.message;
  }

  sendMessage(message: string) {
    message = message.trim();
    // Ref https://stackoverflow.com/a/5487027 for use of below condition.
    if (!!message) {
      const response = {
        userName: this.userName,
        message: message,
        toUser: this.toUser
      };
      // Send message to server
      this.websocketService.sendMessage(JSON.stringify(response));
      // Add message to the chatbox as sent by current user.
      this.createAndAddMessageComponent({
        userName: "you",
        message: message
      });
    }
  }

  setUserName(userName: string) {
    userName = userName.trim();
    if (!!userName) {
      this.websocketService.connect(userName);
      this.userName = userName;
      this.showUserForm = false;
      this.showToUserForm = true;
    }
  }

  setReciever(reciever: string) {
    reciever = reciever.trim();
    if (!!reciever) {
      this.toUser = reciever;
      this.showForm = true;
      this.showToUserForm = false;
    }
  }
}
