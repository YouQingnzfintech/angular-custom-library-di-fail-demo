import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CrankAngularComponentsComponent } from './crank-angular-components.component';


@NgModule({
  declarations: [CrankAngularComponentsComponent],
  imports: [
    CommonModule,
    HttpClientModule

  ],
  exports: [CrankAngularComponentsComponent]
})
export class CrankAngularComponentsModule { }
