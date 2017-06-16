import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import { Message } from '../model/message';

@Injectable()
export class MessageService {

  constructor(private afdb: AngularFireDatabase) { }

  findAllMessages(): Observable<Message[]> {
    return this.afdb
      .list('messages', {query: {orderByChild: 'position'}})
      .do(console.table)
      .map(Message.fromJsonArray);
  }

  findMessageByKey(messageKey: string): Observable<Message> {
    return this.afdb
      .object(`/messages/${messageKey}`)
      .do(console.table)
      .map(Message.fromJson);
  }

  markMessageAsRead(messageKey: string) {
    this.afdb
      .object(`/messages/${messageKey}`)
      .update({'read': true})
      .then(result => console.log('Message marked as read: ', messageKey))
      .catch(error => console.error);
  }
}
