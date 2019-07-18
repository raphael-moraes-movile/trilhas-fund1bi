import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-chat-bubble',
  template: `
  
  <ng-container [ngSwitch]="side">
    <div *ngSwitchCase="'right'">
      <div class="flex justify-end items-center">
        <div class="w-50 flex items-center justify-end">
        <p class="bubble--text from-user">
          <img src="/assets/loader.svg" *ngIf="loading; else elseLoading"/>
          <ng-template #elseLoading>
            {{text}}
          </ng-template>
        </p>
        <span class="speach-bubble from-user"></span>
        </div>
        <figure class="avatar">
          <img src="/assets/avatar.png" alt="Avatar 1Bi"/>
        </figure>
      </div>
    </div>
    <div *ngSwitchDefault>
      <div class="flex justify-start items-center">
        <figure class="avatar">
          <img src="/assets/avatar.png" alt="Avatar 1Bi"/>
        </figure>
        <div class="w-50 flex items-center justify-start">
          <span class="speach-bubble from-bot"></span>
          <p class="bubble--text from-bot">
            <img src="/assets/loader.svg" *ngIf="loading; else elseLoading"/>
            <ng-template #elseLoading>
              {{text}}
            </ng-template>
          </p>
        </div>
      </div>
    </div>
  </ng-container>
  `,
  styleUrls: ['./chat-bubble.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatBubbleComponent implements OnInit {
  @Input() text: string = '';
  @Input() side: string = 'left';
  @Input() loading: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
