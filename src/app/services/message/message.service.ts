import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

interface IMessage {
  messageType: number;
  messageText: string;
}
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageSource = new BehaviorSubject<IMessage>({
    messageType: 0,
    messageText: '',
  });
  currentMessage = this.messageSource.asObservable();
  constructor() {}
  changeMessage(messageType: number, messageText: string = '') {
    // 1 for spin, 2 for show result
    this.messageSource.next({ messageType, messageText });
  }
}
