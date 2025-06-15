import { Component, ViewChild } from '@angular/core';
import { PlayerChoicesComponent } from './player-choices/player-choices.component';
import { ScoreGameComponent } from './score-game/score-game.component';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [PlayerChoicesComponent, ScoreGameComponent],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent {
  allColors: string[] = ['red', 'blue', 'green', 'orange', 'pink', 'purple'];
  colorsToGuess: string[] = []
  @ViewChild('inserColor') InsertColor: any = new ViewChild('inserColor');
  lineFinished: string[] = [];
  firstRenderScore: boolean = true
  @ViewChild('score') checkScore: any = new ViewChild('score');
  indexes: number[] = [1, 2, 3, 4]
  ngOnInit() {
    for (var i = 1; i <= 4; i++) {
      let curColor = this.allColors[Math.floor(Math.random() * 6)]
      while (this.colorsToGuess.includes(curColor))
        curColor = this.allColors[Math.floor(Math.random() * 6)]
      this.colorsToGuess.push(curColor)
      console.log(curColor)
    }
    alert("ברוכים הבאים למשחק בול פגיעה! עליך לגלות את הצבעים ומיקומם. הסטוריית בחירותיך תופיע משמאל, והניקוד יופיע בצד ימין, כאשר צבע אדום מסמל קליעה במקום וצבע צהוב מסמל שהצבע קיים אך לא במקום . בטוחים שתהנו🤩😍🤗😜😎")
  }

  setColorChoice(color: string) {
    this.InsertColor.changeColor(color);
  }

  isqueueFinished(finishedLine: string[]) {
    this.lineFinished = finishedLine
    this.checkScore.playerScore()
    if (this.firstRenderScore)
      this.firstRenderScore = false
  }
}