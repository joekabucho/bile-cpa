import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
    providedIn: 'root'
})
export class EventEmitterService1 {

    invokeFirstComponentFunction1 = new EventEmitter();
    subsVar: Subscription;

    constructor() { }

    onFirstComponentButtonClick1() {
        this.invokeFirstComponentFunction1.emit();
    }
}
