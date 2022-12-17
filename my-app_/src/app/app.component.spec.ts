// import { TestBed } from '@angular/core/testing';
// import { AppComponent } from './app.component';
// // import { AppService } from 'project/project-name/src/app.service.ts';
// import { AppService } from '../../../project-name/src/app.service';

// import { of } from 'rxjs';

// describe('AppComponent', () => {
//   let component: AppComponent;
//   let appService: AppService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [AppComponent],
//       providers: [AppService],
//     });

//     component = TestBed.inject(AppComponent);
//     appService = TestBed.inject(AppService);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should get the current score from the service', () => {
//     const score = 10;
//     spyOn(appService, 'getScore').and.returnValue(of(score));
//     component.ngOnInit();
//     expect(component.score).toBe(score);
//   });

//   it('should get the total number of questions from the service', () => {
//     const totalQuestions = 5;
//     spyOn(appService, 'getTotalQuestions').and.returnValue(of(totalQuestions));
//     component.ngOnInit();
//     expect(component.totalQuestions).toBe(totalQuestions);
//   });

//   it('should get the current question index from the service', () => {
//     const currentQuestion = 3;
//     spyOn(appService, 'getCurrentQuestion').and.returnValue(of(currentQuestion));
//     component.ngOnInit();
//     expect(component.currentQuestion).toBe(currentQuestion);
//   });

//   it('should get the list of questions from the service', () => {
//     const questions = ['What is the capital of France?', 'What is the capital of Japan?'];
//     spyOn(appService, 'getQuestions').and.returnValue(of(questions));
//     component.ngOnInit();
//     expect(component.questions).toEqual(questions);
//   });

//   it('should get the list of answers from the service', () => {
//     const answers = [['Paris', 'Tokyo', 'New York'], ['Tokyo', 'Paris', 'Beijing']];
//     spyOn(appService, 'getAnswers').and.returnValue(of(answers));
//     component.ngOnInit();
//     expect(component.answers).toEqual(answers);
//   });

//   it('should submit the answer to the service when the user clicks a button', () => {
//     const question = 0;
//     const answer = 0;
//     spyOn(appService, 'submitAnswer').and.returnValue(of(null));
//     component.submitAnswer(question, answer);
//     expect(appService.submitAnswer).toHaveBeenCalledWith(question, answer);
//   });
// });





// // import { TestBed } from '@angular/core/testing';
// // import { AppComponent } from './app.component';

// // describe('AppComponent', () => {
// //   beforeEach(async () => {
// //     await TestBed.configureTestingModule({
// //       declarations: [
// //         AppComponent
// //       ],
// //     }).compileComponents();
// //   });

// //   it('should create the app', () => {
// //     const fixture = TestBed.createComponent(AppComponent);
// //     const app = fixture.componentInstance;
// //     expect(app).toBeTruthy();
// //   });

// //   it(`should have as title 'my-app'`, () => {
// //     const fixture = TestBed.createComponent(AppComponent);
// //     const app = fixture.componentInstance;
// //     expect(app.title).toEqual('my-app');
// //   });

// //   it('should render title', () => {
// //     const fixture = TestBed.createComponent(AppComponent);
// //     fixture.detectChanges();
// //     const compiled = fixture.nativeElement as HTMLElement;
// //     expect(compiled.querySelector('.content span')?.textContent).toContain('my-app app is running!');
// //   });
// // });
