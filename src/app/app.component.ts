import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="root__container">
    
    <div class="w-100 h-10 header">
      <span [ngClass]="{'o-0': !displayAnimation}"></span>
      <app-fundlogo [displayAnimation]="displayAnimation"></app-fundlogo>
    </div>


    <div class="flex flex-column w-100 flex-grow-1" [ngClass]="{'o-0': !displayAnimation}">
      <app-chat-wrapper class="h-75 pb2 flex justify-center overflow-container" id="scrollableDiv"></app-chat-wrapper>
      <app-chat-input class="h-25"></app-chat-input>
    </div>

    <footer class="flex h-10 items-end justify-between w-100 ph4" [ngClass]="{'o-0': !displayAnimation}">
      <span class="db-l db-m db-ns dn">Este projeto é uma iniciativa da <b>Fundação 1bi</b>. Saiba mais sobre a trilha de desenvolvimento: LINK</span>
      <span class="db-l db-m db-ns dn">Powered by <b>Wavy</b></span>
    </footer>

    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  title = 'Fundação 1 Bi';
  displayAnimation = false;

  ngOnInit(){
    console.log('Animation started');
    setTimeout(() => {
      this.displayAnimation = true;
      console.log('Animation ended');
    }, 3000);
  }
}
