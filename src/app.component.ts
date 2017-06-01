import { Component} from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import translateIntoPigLatin from './translate-into-pig';

import './styles/reset.css';
import './styles/main.css';


export interface HistoryItem { pig: string; eng: string }

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  pigLatinForm: FormGroup;

  currentEntry : HistoryItem;

  entries : HistoryItem[] = [];

  reset() {

    this.entries.push(this.currentEntry);
    if(this.entries.length > 10) {
      this.entries.shift();
    }
    this.pigLatinForm.reset({
      userInput : ''
    });
    this.currentEntry = { pig : '', eng : '' };
  }

  constructor (private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.pigLatinForm = this.formBuilder.group({
      userInput : new FormControl()
    });

    this.currentEntry = { pig : '', eng : '' };

    let userInputStream = this.pigLatinForm.get('userInput').valueChanges;

    let dataStream = userInputStream.debounceTime(100).map(val => {

      return {
        pig : translateIntoPigLatin(val),
        eng : val
      };

    });

    dataStream.subscribe(currentEntry => {

      this.currentEntry = currentEntry;
    });
  }
}
