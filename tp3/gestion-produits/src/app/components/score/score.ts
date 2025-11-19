import { Component , Input  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './score.html',
  styleUrl: './score.css',
})
export class Score {
  @Input() score: number = 0;
  @Input() bonnes: number = 0;
  @Input() mauvaises: number = 0;
}
