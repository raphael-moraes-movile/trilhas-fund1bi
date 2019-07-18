import { Component, OnInit } from '@angular/core';
import { StateControlService } from '../core/state-control';

@Component({
  selector: 'app-chat-wrapper',
  template: `
    <div class="flex flex-column w-75 h-100">
      <app-chat-bubble [text]="item" *ngFor="let item of selectedIntroduction; let i = index" 
      [loading]="loadingIntroduction(i, selectedIntroduction, introduction)"></app-chat-bubble>

      <div *ngIf="name.length > 0">
        <app-chat-bubble [text]="name" [side]="'right'" [loading]="false"></app-chat-bubble>
      </div>
      
      <div *ngIf="displayPhoneConversation">
        <app-chat-bubble [text]="item" *ngFor="let item of selectedPhoneConversation; let i = index"
        [loading]="loadingIntroduction(i, selectedPhoneConversation, phoneConversation)"></app-chat-bubble>
      </div>

      <div *ngIf="numberDisplay.length > 0">
        <app-chat-bubble [text]="numberDisplay" [side]="'right'" [loading]="false"></app-chat-bubble>
      </div>

      <div *ngIf="displayStartedConversation">
        <app-chat-bubble [text]="item" *ngFor="let item of selectedStartedConversation; let i = index"
        [loading]="loadingIntroduction(i, selectedStartedConversation, startedConversation)"></app-chat-bubble>
      </div>
    </div>
  `,
  styles: []
})
export class ChatWrapperComponent implements OnInit {
  selectedIntroduction: string[] = [];
  selectedPhoneConversation: string[] = [];
  selectedStartedConversation: string[] = [];

  readonly introduction = [
    'Oi, tudo bem?', 'Eu sou a Bi e estou aqui para te ajudar a dar o primeiro passo de desenvolvimento em uma competência!',
    'Mas antes, gostaria de saber como posso te chamar.'
  ];

  readonly phoneConversation = [
    'Muito prazer! Essas são as competências que posso te ajudar a desenvolver:',
    'Empatia\n Criatividade\n Liderança\n Inteligência emocional\n Autoconhecimento\n Resolução de problemas',
    'Para começar, me diga qual é o número do seu whatsapp'
  ];

  readonly startedConversation = [
    'Agora é só me chamar! No WhatsApp você vai escolher qual competência desenvolver',
    'Para começar, basta clicar no botão abaixo. Você vai direto para a conversa  e vai me enviar #TRILHACOMPETENCIAS'
  ];

  displayPhoneConversation = false;
  displayStartedConversation = false;
  name: string = '';
  number: string = '';
  numberDisplay: string = '';

  constructor(private stateControl: StateControlService) { }

  ngOnInit() {
    this.getIntroductionValues(0);
    this.stateControl.state.name.subscribe(
      (value) => {
        console.log('User entered the name', value);
        this.name = value;
          if(value.length > 0){
            this.displayPhoneConversation = true;
            this.getPhoneValues(0);
          }        
      }
    );

    this.stateControl.state.number.subscribe(
      (value) => {
        this.number = value;
        if(value.length > 0){
          this.getStartedValues(0);
        }
      }
    );

    this.stateControl.state.started.subscribe(
      (started) => {
        console.log('User confirmed the action');
        this.displayStartedConversation = started;
        this.numberDisplay = this.number;
      }
    );
  }

  getIntroductionValues(index) {
    let interval =
    setInterval(() => {
      if (index == this.introduction.length){
        clearInterval(interval);
        return;
      }
      this.selectedIntroduction.push(this.introduction[index]);
      this.scrollToBottom();
      index++;
    }, 2000);
    console.log(index);
  }

  getPhoneValues(index) {
    let interval = setInterval(() => {
      if (index == this.phoneConversation.length){
        clearInterval(interval);
        return;
      }
      this.selectedPhoneConversation.push(this.phoneConversation[index]);
      this.scrollToBottom();
      index++;
    }, 2000);
  }

  getStartedValues(index) {
    let interval = setInterval(() => {
      if (index == this.startedConversation.length){
        clearInterval(interval);
        return;
      }
      this.selectedStartedConversation.push(this.startedConversation[index]);
      this.scrollToBottom();
      index++;
    }, 2000);
  }  

  loadingIntroduction(index, array, baseArray) {
    if(baseArray.length - 1 === index) {
      return false;
    }
    return !(index < (array.length - 1));
  }

   scrollToBottom(){
    let element = document.getElementById('scrollableDiv');
    element.scrollTop = element.scrollHeight;
  }

}
