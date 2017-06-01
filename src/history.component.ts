import { Component, Input } from '@angular/core';
import { HistoryItem } from './app.component';

@Component({
    selector : 'history',
    styleUrls : [
        './history.component.css'
    ],
    template : `
        <h2>history:</h2>
        <ul>
            <li *ngFor="let entry of entries">
                <div class="english">{{ entry.eng }}</div>
                <div class="pig">{{ entry.pig }}</div>
            </li>
        </ul>
    `
})

export class HistoryComponent {

    @Input()
    entries: HistoryItem[];

}