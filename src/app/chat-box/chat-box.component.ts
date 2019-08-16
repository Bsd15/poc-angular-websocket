import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendMessage(message: string) {
    message = message.trim();
    // Ref https://stackoverflow.com/a/5487027 for use of below condition.
    if (!!message)  {
      console.log(message);
    } else {
      console.log('Empty Message');
    }
  }

}
