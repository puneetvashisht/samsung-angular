import { Component } from '@angular/core';

@Component({
  selector: 'app-change-detect-demo',
  templateUrl: './change-detect-demo.component.html',
  styleUrls: ['./change-detect-demo.component.css']
})
export class ChangeDetectDemoComponent {

  words  = ['one', 'two', 'three'];

  addWord(word: string) {
    // mutuable way
    this.words.push(word);

    // immutable way using spread operator
    // this.words = [...this.words, word];
  }

}
