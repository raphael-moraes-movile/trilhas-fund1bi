import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FundlogoComponent } from './fundlogo/fundlogo.component';
import { ChatWrapperComponent } from './chat-wrapper/chat-wrapper.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatBubbleComponent } from './chat-wrapper/chat-bubble/chat-bubble.component';

@NgModule({
  declarations: [
    AppComponent,
    FundlogoComponent,
    ChatWrapperComponent,
    ChatInputComponent,
    ChatBubbleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
