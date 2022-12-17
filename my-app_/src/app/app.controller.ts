import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('quiz')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('score')
  async getScore(): Promise<number> {
    return this.appService.getScore();
  }

  @Get('total-questions')
  async getTotalQuestions(): Promise<number> {
    return this.appService.getTotalQuestions();
  }

  @Get('current-question')
  async getCurrentQuestion(): Promise<number> {
    return this.appService.getCurrentQuestion();
  }

  @Get('questions')
  async getQuestions(): Promise<string[]> {
    return this.appService.getQuestions();
  }

  @Get('answers')
  async getAnswers(): Promise<string[][]> {
    return this.appService.getAnswers();
  }

  @Get('correct-answers')
  async getCorrectAnswers(): Promise<number[]> {
    return this.appService.getCorrectAnswers();
  }

  @Post('submit-answer')
  async submitAnswer(
    @Body('question') question: number,
    @Body('answer') answer: number,
  ): Promise<void> {
    return this.appService.submitAnswer(question, answer);
  }
}


////////////////////////////////



// import { Body, Controller, Get, Post } from '@nestjs/common';
// import { ethers } from 'ethers';
// import { AppService, QuizService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

  // @Post('claim-tokens')
  // claimTokens(@Body() body: any){
  //   return this.appService.claimTokens();
  // }


  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get("last-block")
  // getLastBlock(): any {
  //   return this.appService.getLastBlock();
  // }

  // @Get("addition")
  // getAdd(): any {
  //   return this.appService.getAdd() + " " +this.appService.getHello();
  // }
// }
