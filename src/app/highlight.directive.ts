import { Directive,Renderer2,HostListener,ElementRef } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private render:Renderer2,private elem:ElementRef) { }

  @HostListener("mouseover")mouseover(){
    this.render.setStyle(this.elem.nativeElement,'color','gold')
    
  }
  


}
