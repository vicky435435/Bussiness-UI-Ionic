import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-login-desgin',
  templateUrl: './new-login-desgin.page.html',
  styleUrls: ['./new-login-desgin.page.scss'],
})
export class NewLoginDesginPage implements OnInit {

  staySignedIn: boolean = true;

  constructor() {}
 
  changeStatus(value: any){
    this.staySignedIn = value;
  }
 

  ngOnInit() {
  }

}
