import { Component , Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../game/question.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './question.html',
  styleUrl: './question.css',
})
export class QuestionComponent {
  @Input() question!: Question;
  @Input() userText: string = '';
  @Output() userTextChange = new EventEmitter<string>(); // pour two-way sur userText
  @Output() selectOption = new EventEmitter<string>();
  @Output() submitText = new EventEmitter<void>();

  onOptionClick(opt: string) {
    this.selectOption.emit(opt);
  }

  onTextChange(value: string) {
    this.userText = value;
    this.userTextChange.emit(this.userText);
  }

  onSubmitText() {
    this.submitText.emit();
  }

}
