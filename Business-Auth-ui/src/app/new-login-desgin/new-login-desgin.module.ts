import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLoginDesginPageRoutingModule } from './new-login-desgin-routing.module';

import { NewLoginDesginPage } from './new-login-desgin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewLoginDesginPageRoutingModule
  ],
  declarations: [NewLoginDesginPage]
})
export class NewLoginDesginPageModule {}
