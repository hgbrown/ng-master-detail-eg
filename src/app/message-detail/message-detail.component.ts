import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {Message} from '../shared/model/message';
import {MessageService} from '../shared/services/message.service';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit, OnChanges {

  @Input()
  message: Message;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const simpleChange: SimpleChange = changes['message'];
    const currentMessage: Message = <Message> simpleChange.currentValue;
    this.messageService.markMessageAsRead(currentMessage.key);
  }
}
