import { Component, OnInit } from '@angular/core';
import { StateControlService } from '../core/state-control';

@Component({
  selector: 'app-chat-input',
  template: `
  <div class="flex w-100 h-100 bg-pink justify-center items-center" *ngIf="visible !== 'send'; else displaySend">
    <div class="w-75 flex justify-around items-center">
      <ng-container [ngSwitch]="visible">
        <div class="flex justify-between items-center flex-grow-1" *ngSwitchCase="'name'">
          <input type="text" class="input ph4 tj" placeholder="Digite o seu nome" [(ngModel)]="name">  
          <button type="button" class="btn btn-submit grow dib pointer" (click)="onSendClicked($event)">Enviar</button>
        </div>

        <div class="flex justify-between items-center flex-grow-1" *ngSwitchCase="'number'">
          <input type="phone" class="input ph4 tj" placeholder="DDD + número" [(ngModel)]="number">  
          <button type="button" class="btn btn-submit grow dib pointer" (click)="onSendClicked($event)">Enviar</button>
        </div>

        <div class="flex justify-between items-center flex-grow-1" *ngSwitchDefault>
          <button type="button" class="btn btn-submit grow dib pointer" (click)="onBackClicked($event)">Voltar</button>
          <div class="flex flex-column justify-center items-center">
            <span>Confirme seu whatsapp:</span>
            <span>{{number}}</span>
          </div>
          <button type="button" class="btn btn-submit grow dib pointer bg-white pink" (click)="onConfirmClicked($event)">Enviar</button>
        </div>
      </ng-container>
    </div>
  </div>
  <ng-template #displaySend>
    <div class="flex w-100 h-100 justify-center items-center">
      <div class="w-75 flex justify-around items-center flex-column">
       <button type="button" class="btn grow dib pointer bg-pink white" (click)="onStartClicked($event)">Começar</button>
       <div class="share-buttons">
       <h3>Compartilhe o que você está aprendendo</h3>
        <div class="social-buttons">
            <a class="link dark-blue hover-silver dib h2 w2 mr3" href="https://facebook.com" title="Facebook">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
              <path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/>
              </svg> 
            </a>

            <a class="link hover-silver dark-blue dib h2 w2 mr3" href="https://www.linkedin.com/sharing/share-offsite/?url=https://trilha.fundacao1bi.com.br" target="_blank">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"/></svg>
            </a>

            <a class="link hover-silver dark-blue dib h2 w2 mr3" href="https://twitter.com/intent/tweet?text=O Fundação 1 Bi está me ajudando a aprender sobre inteligência-emocional. Estou estudando agora de forma rápida e simples. Quer aprender também? https://trilha.fundacao1bi.com.br">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </ng-template>
  `,
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {
  name: string = '';
  visible: 'name' | 'number' | 'confirm' | 'send' = 'name';
  number: string = '';

  constructor(private stateControl: StateControlService) { }

  ngOnInit() {
    this.stateControl.state.name.subscribe(
      (name) => {
        this.name = name;
        this.visible = this.name.length > 0 ? 'number' : 'name';
      }
    );

    this.stateControl.state.number.subscribe(
      (number) => {
        this.number = number;
        this.visible = this.number.length > 0 ? 'confirm' : this.name.length > 0 ? 'number' : 'name';
      }
    );
  }

  onSendClicked(event){
    if(this.visible === 'name') {
      this.stateControl.setAttribute('name', this.name);
    } else {
      this.stateControl.setAttribute('number', this.number);
    }
  }

  onConfirmClicked(event){
    this.stateControl.setAttribute('started', true);
    this.visible = 'send';
  }

  onStartClicked(event){
   window.open('https://api.whatsapp.com/send?phone=5511942907731&text=%23TRILHADECOMPETENCIAS', '_blank');
  }

  onBackClicked(event){
    this.visible = 'number';
  }
}
