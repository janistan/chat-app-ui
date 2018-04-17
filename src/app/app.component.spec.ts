import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatIconModule, MatSidenavModule, MatToolbarModule, MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatListModule } from '@angular/material';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { ChatService } from './service/chat.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'chat', component: ChatComponent},
  { path: 'about', component: AboutComponent},
  { path: '', component: ChatComponent}
];

let component: AppComponent;
let service: ChatService;
describe('AppComponent', () => {
  beforeEach(async(() => {
    let http: HttpClient;
    service = new ChatService(http);
    component = new AppComponent(service);
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ChatComponent,
        AboutComponent
      ], 
      imports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatListModule,
        CommonModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpClientModule
      ],
      providers: [
        ChatService,
        HttpClient,
        {provide: APP_BASE_HREF, useValue: '/' },
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`#changePage(1) should open About Page`, async(() => {
    component.changePage(1);
    expect(component.menus[component.menuIndex]['title']).toBe("Information");
  }));

  it(`#clearChat() should reset chatLog`, async(() => {
    service.addMessage("me", "Hi Watson, can you help me?", Date.now(), "sent");
    component.clearChat();
    expect(service.chats.length).toEqual(1);
  }));
});
