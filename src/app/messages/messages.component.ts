import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/services/message.service';
import { Observable } from 'rxjs/Rx';
import { Message } from '../shared/model/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages$: Observable<Message[]>;
  messageDetail$: Observable<Message>;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messages$ = this.messageService.findAllMessages();
  }

  backToMessageList() {
    this.messageDetail$ = null;
  }

  selectMessage(selectedMessage: Message) {
    this.messageDetail$ = this.messageService.findMessageByKey(selectedMessage.key);
  }
}
