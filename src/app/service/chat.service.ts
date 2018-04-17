import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ChatService {

  public menus = [
    {
      title: 'Chat with IBM Watson',
      icon: 'chat',
      link: 'chat'
    }, {
      title: 'Information',
      icon: 'information',
      link: 'about'
    }
  ];

  public chats: Object[] = [{
    from: 'watson',
    text: 'Hi there, I\'m IBM Watson',
    time: Date.now(),
    status: 'sent'
  }];
  public chatLog: Subject<Object[]> = new Subject<Object[]>();

  context: Object[];
  apiAddress = "https://simple-chatbot-api.au-syd.mybluemix.net/api/v1/watson/conversation";

  constructor(private http: HttpClient) { 
  }

  clearMessage() {
    this.chats = [{
      from: 'watson',
      text: 'Hi there, I\'m IBM Watson',
      time: Date.now(),
      status: 'sent'
    }];
    console.log(this.chats);
  }

  sendMessage(message: string, context:Object[]) {
     return this.http.post(this.apiAddress, {
       text : message,
       context : context}
     )
  }

  addMessage(from: string, message: string, time: number, status:string) {
    this.chats.push( 
      {
        from: from,
        text: message,
        time: time,
        status: status
      }
    )
  }
}
