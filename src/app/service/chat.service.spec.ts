import { TestBed, inject } from '@angular/core/testing';
import { ChatService } from './chat.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('Chat Services', () => {
  let service: ChatService;
  let http: HttpClient;
  beforeEach(() => {
    service = new ChatService(http);
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        ChatService,
        HttpClient
      ]
    });
  });

  it('should be created', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));

  it('#addMessage should be added to the conversation', () => {
    service.addMessage("me", "Please turn on the Air Conditioner", Date.now(),"sent");
    expect(service.chats[service.chats.length-1]['from']).toBe("me");
    expect(service.chats[service.chats.length-1]['text']).toBe("Please turn on the Air Conditioner");
    expect(service.chats[service.chats.length-1]['status']).toBe("sent");
  });

  it('#clearMessage should reset the conversation', () => {
    service.clearMessage();
    expect(service.chats.length).toEqual(1);
  });
});
