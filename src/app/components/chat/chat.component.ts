import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../service/chat.service';
import { MatDialog, MAT_DIALOG_SCROLL_STRATEGY } from '@angular/material';
import { DialogComponent } from '../../util/dialog/dialog.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(public chatService: ChatService, public dialog: MatDialog) {
    this.chatService.chatLog.asObservable().subscribe (
      value => {
        this.chats = this.chatService.chats;
        this.scrollDiv();
      }
    )
   }
  @Input() username: String;
  public chats = this.chatService.chats;
  watsonRes: string = '';
  message: string;

  ngOnInit() {
  }

  onKey(event:any){
    if(event.keyCode == 13){
       this.sendMessage();
    }
   }
 
  sendMessage(): void {
    let userInput = this.message;
    this.message = '';
    if(this.chatService.chats[this.chatService.chats.length-1]['status'] == "pending") {
       let dialogRef = this.dialog.open(DialogComponent, {
         width: '400px',
       });
     }
    else if(userInput !== undefined && userInput.length!= 0) {
     this.chatService.addMessage("me", userInput, Date.now(), "pending");
     this.chatService.chatLog.next(null);
     this.chatService.sendMessage(userInput, this.chatService.context).toPromise()
     .then(
       (res:any) => {
         this.chatService.chats[this.chatService.chats.length-1]['status'] = "sent";
         this.message = '';
         let watsonRes = res.output.text;
         this.chatService.addMessage("watson", res.output.text+" ", Date.now(), "sent");
         this.chatService.context = res.context;
         this.chatService.chatLog.next(watsonRes);
         this.scrollDiv();
       }
     )
   }
  }

  scrollDiv() {
    let eleam: HTMLElement = document.getElementById('chat-ds');
    window.setTimeout(eleam.scrollTop = eleam.scrollHeight, 10000);
  }
}
