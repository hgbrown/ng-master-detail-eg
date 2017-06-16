import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../shared/model/message';
import * as _ from 'lodash';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input()
  messages: Message[];

  @Output()
  selectedMessage = new EventEmitter<Message>();

  constructor() { }

  ngOnInit() {
  }

  countUnread(msgs: Message[]): number {
    return _.filter(msgs, msg => !msg.read).length;
  }

  selectMessage(message: Message): boolean {
    this.selectedMessage.next(message);
    return false;
  }
}
