import { Injectable } from '@nestjs/common';
import { providers, Contract, utils } from 'ethers';
import Quiz from '../../../packages/blockchain/contracts/Quiz';
import { Observable, of } from 'rxjs';
// import Quiz from '/Users/one/Documents/HARDHAT/EncodeSolidityBootcampProject/packages/blockchain/contracts/Quiz.sol ';


// import { AppService } from '../../../project-name/src/app.service';


@Injectable()
export class AppService {
  private provider: providers.JsonRpcProvider;
  private contract: Contract;

  constructor() {
    // Initialize provider and contract
    this.provider = new providers.JsonRpcProvider('http://localhost:8545');
    this.contract = new Contract(
      Quiz.address, // use the contract's address
      Quiz.abi, // use the contract's ABI
      this.provider.getSigner()
    );
  }
  getScore(): Observable<number> {
  return of(this.contract.score);
}

  // async getScore(): Promise<number> {
  //   // Get the current score from the contract
  //   return await this.contract.score();
  // }

   getTotalQuestions(): Observable<number> {
    // Get the total number of questions from the contract
    return  this.contract.totalQuestions();
  }

   getCurrentQuestion(): Observable<number> {
    // Get the current question index from the contract
    return  this.contract.currentQuestion();
  }

  async getQuestions(): Promise<string[]> {
    // Get the list of questions from the contract
    const questions: string[] = [];
    const numQuestions = await this.contract.totalQuestions();
    for (let i = 0; i < numQuestions; i++) {
      const question = await this.contract.questions(i);
      questions.push(question);
    }
    return questions;
  }

  async getAnswers(): Promise<string[][]> {
    // Get the list of answers from the contract
    const answers: string[][] = [];
    const numQuestions = await this.contract.totalQuestions();
    for (let i = 0; i < numQuestions; i++) {
      const answerList = await this.contract.answers(i);
      answers.push(answerList);
    }
    return answers;
  }

  async getCorrectAnswers(): Promise<number[]> {
    // Get the list of correct answers from the contract
    const correctAnswers: number[] = [];
    const numQuestions = await this.contract.totalQuestions();
    for (let i = 0; i < numQuestions; i++) {
      const correctAnswer = await this.contract.correctAnswers(i);
      correctAnswers.push(correctAnswer);
    }
    return correctAnswers;
  }

  async submitAnswer(question: number, answer: number): Promise<void> {
    // Submit the answer to the contract
    await this.contract.submitAnswer(question, answer);
  }
}


/////////////////////////////////


// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { ethers, Signer } from 'ethers';



// @Injectable()
// export class QuizService {

//   provider: ethers.providers.Provider;
  
//   constructor(private configService: ConfigService ) {
//     this.provider =  ethers.getDefaultProvider('goerli')
//     }

//   getNextQuestion() {
//     return this.provider.get('/api/next-question');
//   }

//   submitAnswer(answer: number) {
//     return this.provider.post('/api/submit-answer', { answer });
//   }
// }


///////////////////////////////////

// import { Injectable } from "@angular/common";
// import { HttpClientModule } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class QuizService {

//   constructor(private http: HttpClientModule) { }

//   getNextQuestion() {
//     return this.http.get('/api/next-question');
//   }

//   submitAnswer(answer: number) {
//     return this.http.post('/api/submit-answer', { answer });
//   }
// }








//////////////////////////////////////////////////////////////

// import { EtherscanProvider } from '@ethersproject/providers';
// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { ethers } from 'ethers';

// @Injectable()
// export class AppService {
// provider: ethers.providers.Provider;

// // constructor(private configService: ConfigService) {
// //   this.provider = ethers.getDefaultProvider('goerli');
// // }

//   claimTokens() {
    
//   }



  // getAdd(): any {
  //   return "Okey";
  // }
  // getLastBlock(): any {
  //   const provider = ethers.getDefaultProvider("goerli");
  //   return provider.getBlock("latest");
  // }

//   getHello(): string {
//     return 'Hello World!';
//   }

// }
