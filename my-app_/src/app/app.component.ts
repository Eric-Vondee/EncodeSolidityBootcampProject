import { Component } from '@angular/core';
import { ethers } from 'ethers';
import { WalletService } from './services/wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  submitAnswer() {
  throw new Error('Method not implemented.');
}
  public walletConnected: boolean = false;
  public walletId: string = '';
  provider: ethers.providers.Provider;

  title = 'Proof your Knowledge and get an exclusive NFT';
  number = 44;
  score= 0;
  answers: string[] | undefined;
  totalQuestions: number | undefined;
  currentQuestion: number | undefined;
  userAnswer: number | undefined;
  question: number | undefined ;


  constructor(private walletService: WalletService) {
    this.provider = ethers.providers.getDefaultProvider("goerli");
    this.connectToWallet  = async () => {
      const accounts = await this.walletService.connectWallet();
      if(accounts.length > 0){
        this.walletConnected = true;
        this.walletId = accounts[0];
      }
    }
    this.currentQuestion = 0;
    this.totalQuestions = 0;
    this.userAnswer = 0;
    this.answers = ["Option 1","Option 2","Option 3","Option 4"];
  }
  connectToWallet  = async () => {

  }  
  checkWalletConnected = async () => {
    const accounts = await this.walletService.checkWalletConnected();
    if(accounts.length > 0){
      this.walletConnected = true;
      this.walletId = accounts[0];
    }
  }
  ngOnInit(): void {
    this.checkWalletConnected();
  }
}