import { Component, Input, SimpleChanges } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-score-game',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './score-game.component.html',
  styleUrl: './score-game.component.css'
})
export class ScoreGameComponent {
  matrixScore: string[][] = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']];
  @Input()
  currentLine: string[] = []
  indexRow: number = 0
  indexCol: number = 0
  @Input()
  colorsForGuess: string[] = []
  CountInPlace: number = 0
  CountExist: number = 0
  countNotExist: number = 0

  playerScore() {
    setTimeout(() => {
      for (let i = 0; i < 4; i++) {
        if (this.colorsForGuess.includes(this.currentLine[i])) {
          if (this.currentLine[i] == this.colorsForGuess[i])
            this.CountInPlace++
          else
            this.CountExist++
        }
        else
          this.countNotExist++
      }
      if (this.CountInPlace == 4) {
        for (let i = 0; i < 4; i++) {
          this.matrixScore[this.indexRow][i] = 'red'
        }
        alert("ניצחת!!!🤣😊👍🤣😘😆😛🤣😂😁")
        location.reload()
      }
      else {
        while (this.CountInPlace > 0) {
          this.matrixScore[this.indexRow][this.indexCol++] = 'red'
          this.CountInPlace--
        }
        while (this.CountExist > 0) {
          this.matrixScore[this.indexRow][this.indexCol++] = 'yellow'
          this.CountExist--
        }
        while (this.countNotExist > 0) {
          this.matrixScore[this.indexRow][this.indexCol++] = 'aliceblue'
          this.countNotExist--
        }
        this.indexRow++
        this.indexCol = 0
        this.CountInPlace = 0
        this.CountExist = 0
        this.countNotExist = 0
      }
    }, 100);
  }
}
