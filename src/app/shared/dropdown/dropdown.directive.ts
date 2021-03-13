import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // My solution
  // private hostClassName: string = this.element.nativeElement.className;
  // private state: boolean = false;
  // @HostBinding('class') class: string =  this.hostClassName;

  // easier solution:
  @HostBinding('class.open') isOpen: boolean = false;

  // close from anywhere:
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.element.nativeElement.contains(event.target) ? !this.isOpen : false;
  }


  constructor(private element: ElementRef) { }

  // close by clicking drowdown

  // @HostListener('click') toogleClick(mouseEvent: Event) {
    // my solution
    // if (!this.state) {
    //   this.class = `${this.hostClassName} open`
    // } else {
    //   this.class = `${this.hostClassName}`
    // }
    // this.state = !this.state;

    // easier solution:
  //   this.isOpen = !this.isOpen;
  // } 

  

}
