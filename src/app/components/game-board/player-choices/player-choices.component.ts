import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player-choices',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './player-choices.component.html',
  styleUrl: './player-choices.component.css'
})
export class PlayerChoicesComponent {
  selectionMatrix: string[][] = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']];
  indexRow: number = 0;
  indexCol: number = 0;

  @Output()
  queueFinished: EventEmitter<string[]> = new EventEmitter<string[]>();

  changeColor(color: string) {
    if (this.indexRow == this.selectionMatrix.length - 1 && this.indexCol == 3) {
      alert("נכשלת! נגמר המשחק😞🙁☹️")
      location.reload()
    }
    else {
      if (color == this.selectionMatrix[this.indexRow][0] || color == this.selectionMatrix[this.indexRow][1] || color == this.selectionMatrix[this.indexRow][2] || color == this.selectionMatrix[this.indexRow][3])
        alert("בחרת כבר צבע זה בסיבוב הנוכחי")
      else {
        this.selectionMatrix[this.indexRow][this.indexCol] = color;
        if (this.indexCol == 3) {
          this.queueFinished.emit(this.selectionMatrix[this.indexRow]);
          this.indexCol = 0
          this.indexRow++
        }
        else {
          this.indexCol++;
        }
      }
    }
  }
}
