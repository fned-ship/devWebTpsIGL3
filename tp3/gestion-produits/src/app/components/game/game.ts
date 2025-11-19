import { Component } from '@angular/core';
import { Question } from './question.model';
import { Score } from '../score/score';
import { QuestionComponent } from '../question/question';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [QuestionComponent,Score,FormsModule,CommonModule],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  questions: Question[] = [
    { id:1, question: 'Quel est le plus grand océan du monde ?', options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'], reponse: 'Pacifique', answered: false },
    { id:2, question: "Quelle est la capitale de l'Algérie ?", options: ['Alger', 'Tunis', 'Tanger', 'Casablanca'], reponse: 'Alger', answered: false },
    { id:3, question: 'Quelle est la couleur du ciel ?', options: ['Bleu', 'Vert', 'Rouge'], reponse: 'Bleu', answered: false }
  ];

  score: number = 0;
  bonnes: number = 0;
  mauvaises: number = 0;
  currentIndex: number = 0;
  timeLeft: number = 20; 
  timerId: any = null;
  userTextAnswer: string = '';
  finished=false ;

  startTimer() {
    this.stopTimer();
    this.timeLeft = 20;
    this.timerId = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.onTimeOut();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  onSelectOption(option: string, q: Question) {
    if (q.answered) return; 
    q.answered = true;
    if (option === q.reponse) {
      this.score += 10;
      this.bonnes++;
    } else {
      this.score -= 2;
      this.mauvaises++;
    }
    setTimeout(() => {
      this.nextQuestion();
    }, 600);
  }

  onSubmitTextAnswer(q: Question) {
    if (q.answered) return;
    q.answered = true;
    const correct = this.userTextAnswer.trim().toLowerCase() === q.reponse.toLowerCase();
    if (correct) { this.score += 10; this.bonnes++; }
    else { this.score -= 2; this.mauvaises++; }
    this.userTextAnswer = '';
    setTimeout(() => this.nextQuestion(), 600);
  }

  nextQuestion() {
    this.stopTimer();
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.startTimer();
    } else {
      this.finished=true ;
      this.stopTimer();
    }
  }

  onTimeOut() {
    const q = this.questions[this.currentIndex];
    if (!q.answered) {
      q.answered = true;
      this.score -= 2;
      this.mauvaises++;
    }
    setTimeout(() => {
      this.nextQuestion();
    }, 500);
  }

  resetGame() {
    this.questions.forEach(q => q.answered = false);
    this.score = 0; this.bonnes = 0; this.mauvaises = 0; this.currentIndex = 0;
    this.startTimer();
    this.finished=false;
  }
}

