import * as moment from 'moment';
import { Moment } from 'moment';

export class Message {

  static fromJsonArray(array: any[]): Message[] {
    return array.map(Message.fromJson);
  }

  static fromJson({$key, subject, body, from, to, createdOn, position, read, delivered}): Message {
    return new Message($key, subject, body, from, to, createdOn, position, read, delivered);
  }

  constructor(public key: string,
              public subject: string,
              public body: string,
              public from: string,
              public to: string,
              public createdOn: number,
              public position: number,
              public read: boolean = false,
              public delivered: boolean = false
             ) {}

  get createdOnDate(): Date {
    return this.createdOn ? moment(this.createdOn).toDate() : null;
  }

  get createdOnMoment(): Moment {
    return this.createdOn ? moment(this.createdOn) : null;
  }
}
