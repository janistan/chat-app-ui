import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDialogModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './components/chat/chat.component';
import { ChatService } from './service/chat.service';
import { DialogComponent } from './util/dialog/dialog.component';

const appRoutes: Routes = [
  { path: 'chat', component: ChatComponent},
  { path: 'about', component: AboutComponent},
  { path: '', component: ChatComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    AboutComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
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
  entryComponents: [DialogComponent],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
