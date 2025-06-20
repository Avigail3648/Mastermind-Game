import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { PlayerChoicesComponent } from './components/game-board/player-choices/player-choices.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GameBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}