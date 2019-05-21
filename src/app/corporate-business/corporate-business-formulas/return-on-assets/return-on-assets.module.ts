import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnOnAssetsRoutingModule } from './return-on-assets-routing.module';
import { ReturnOnAssetsComponent } from './return-on-assets.component';
import { ReturnOnAssetsCalComponent } from './return-on-assets-cal/return-on-assets-cal.component';

@NgModule({
  declarations: [ReturnOnAssetsComponent, ReturnOnAssetsCalComponent],
  imports: [
    CommonModule,
    ReturnOnAssetsRoutingModule,
    FormulaDefinationModule
  ]
})
export class ReturnOnAssetsModule { }
