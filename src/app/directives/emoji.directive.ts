import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appEmoji]'
})
export class EmojiDirective {

  @Input('appEmoji') emoji: string

  constructor(private el: ElementRef) { 
    this.emoji = ''
  }

  ngOnInit(){
    this.el.nativeElement.style.color= "blue"
    //this.el.nativeElement.textContent = this.el.nativeElement.textContent + " emoji"
    this.el.nativeElement.textContent +=  ' ' + this.emoji
  }

}
