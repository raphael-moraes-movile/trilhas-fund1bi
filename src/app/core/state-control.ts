import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface State {
    name: BehaviorSubject<string>;
    number: BehaviorSubject<string>;
    started: BehaviorSubject<boolean>;
}

@Injectable({providedIn: 'root'})
export class StateControlService {    
    public state: State = {
        name: new BehaviorSubject<string>(''),
        number: new BehaviorSubject<string>(''),
        started: new BehaviorSubject<boolean>(false)
    };

    constructor() { }

    setAttribute(attribute, value) {
        this.state[attribute].next(value);
    }
}