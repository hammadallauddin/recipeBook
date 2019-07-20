import { CommonModule } from '@angular/common';
import { DropdowmDirective } from './dropdown.directive';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DropdowmDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    DropdowmDirective
  ]
})
export class SharedModule {}
