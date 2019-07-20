import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdowmDirective {
  @HostBinding('class.open') isOpen = false; //class dhooonday ga opn ki aur us main lagaye ga ye
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
