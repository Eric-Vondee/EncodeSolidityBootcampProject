import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../project-name/src/app.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  score?: number;
  totalQuestions?: number;
  // currentQuestion: number  = 0;
  currentQuestion?: number; // you can either initialize these properties with a default value, or mark them as undefined by adding a ? after the type declaration.
  questions?: string[];
  answers?: string[][];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getScore().subscribe((score) => {
      this.score = score;
    });

    this.appService.getTotalQuestions().subscribe((totalQuestions) => {
      this.totalQuestions = totalQuestions;
    });

    this.appService.getCurrentQuestion().subscribe((currentQuestion) => {
      this.currentQuestion = currentQuestion;
    });

    this.appService.getQuestions().subscribe((questions) => {
      this.questions = questions;
    });

    this.appService.getAnswers().subscribe((answers) => {
      this.answers = answers;
    });
  }

  submitAnswer(question: number, answer: number) {
    this.appService.submitAnswer(question, answer).subscribe(() => {
      // update the score and current question
      this.appService.getScore().subscribe((score) => {
        this.score = score;
      });

      this.appService.getCurrentQuestion().subscribe((currentQuestion) => {
        this.currentQuestion = currentQuestion;
      });
    });
  }
}





