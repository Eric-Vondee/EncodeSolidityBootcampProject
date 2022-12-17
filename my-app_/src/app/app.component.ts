import { Component, OnInit } from '@angular/core';
import { AppService } from 'project/project-name/src/app.service.ts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  score: number;
  totalQuestions: number;
  currentQuestion: number;
  questions: string[];
  answers: string[][];

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







// import { Component, OnInit } from '@angular/core';
// import { providers, Contract, utils } from 'ethers';
// import Quiz from '/Users/one/Documents/HARDHAT/EncodeSolidityBootcampProject/packages/blockchain/contracts/Quiz.sol ';

// @Component({
//   selector: 'app-app',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class QuizComponent implements OnInit {
//   score: number;
//   totalQuestions: number;
//   currentQuestion: number;
//   questions: string[];
//   answers: string[][];
//   correctAnswers: number[];

//   private provider: providers.JsonRpcProvider;
//   private contract: Contract;

//   constructor() {
//     // Initialize provider and contract
//     this.provider = new providers.JsonRpcProvider('http://localhost:8545');
//     this.contract = new Contract(
//       Quiz.address,
//       Quiz.abi,
//       this.provider.getSigner()
//     );
//   }

//   ngOnInit(): void {
//     // Get the current score, total number of questions, and current question index
//     this.contract.score().then(score => {
//       this.score = score;
//     });
//     this.contract.totalQuestions().then(totalQuestions => {
//       this.totalQuestions = totalQuestions;
//     });
//     this.contract.currentQuestion().then(currentQuestion => {
//       this.currentQuestion = currentQuestion;
//     });

//     // Get the list of questions and answers
//     this.contract.totalQuestions().then(numQuestions => {
//       for (let i = 0; i < numQuestions; i++) {
//         this.contract.questions(i).then(question => {
//           this.questions.push(question);
//         });
//         this.contract.answers(i).then(answers => {
//           this.answers.push(answers);
//         });
//         this.contract.correctAnswers(i).then(correctAnswer => {
//           this.correctAnswers.push(correctAnswer);
//         });
//       }
//     });
//   }

//   async submitAnswer(question: number, answer: number): Promise<void> {
//     // Submit the answer to the contract
//     await this.contract.submitAnswer(question, answer);
//   }
// }
