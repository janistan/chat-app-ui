import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MatIconModule, MatSidenavModule, MatToolbarModule, MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatListModule } from '@angular/material';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';
import { AboutComponent } from '../about/about.component';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../service/chat.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '../../app.component';

const appRoutes: Routes = [
  { path: 'chat', component: ChatComponent},
  { path: 'about', component: AboutComponent},
  { path: '', component: ChatComponent}
];

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async(() => {
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
  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
