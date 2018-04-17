import { Component, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ChatService } from './service/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(private chatService: ChatService) {}
  menus = this.chatService.menus;
  menuIndex = 0;
  
  changePage(index) {
    this.menuIndex = index;
  }

  clearChat(): void {
    this.chatService.clearMessage();
  }
}
