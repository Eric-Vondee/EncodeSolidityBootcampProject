import { Injectable } from '@nestjs/common';
import { providers, Contract, utils } from 'ethers';

const ABI = [
  "function createQuestion(uint256 _questionId, bytes32 _hash) public",
  "function verifyAnswers(uint256 _questionId, bytes32 _hash) public"
]

@Injectable()
export class AppService {
  private provider: providers.JsonRpcProvider;
  private contract: Contract;

  constructor() {
    // Initialize provider and contract
    this.provider = new providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/2gFT6chsEQG2kndo4-j8vGnIk6l0dxA5');
    this.contract = new Contract(
      "0xf1bb59dbc4f38933824b4474c05cd11f1ad7a43a", // use the contract's address
      ABI, // use the contract's ABI
      this.provider
    );
  }
  getScore(): number {
  return (this.contract.score);
}

  // async getScore(): Promise<number> {
  //   // Get the current score from the contract
  //   return await this.contract.score();
  // }

   getTotalQuestions(): number {
    // Get the total number of questions from the contract
    return  this.contract.totalQuestions();
  }

   getCurrentQuestion(): number {
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
