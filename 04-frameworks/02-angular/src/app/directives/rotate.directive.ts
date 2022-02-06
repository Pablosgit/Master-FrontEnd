import { Directive,ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: 'img[appRotate]'
})
export class RotateDirective implements OnInit {

@Input('appRotate') rotate = "";
@Input() step = "";

private totalRotate = 0;
private defaultRotate = 10;
private keyPress = false;

constructor(private elem: ElementRef ) {}

  private onRotate(rotate: number, direction: boolean) {
    this.totalRotate = !direction ? this.totalRotate + rotate : this.totalRotate - rotate;
    this.elem.nativeElement.style.transform = "rotate(" + this.totalRotate + "deg)";
  }

  ngOnInit(): void {
    this.totalRotate = this.rotate === "" ? 0 : parseInt(this.rotate);
    this.elem.nativeElement.style.transform = "rotate(" + this.totalRotate + "deg)";
  }

  @HostListener("click")
  onMouseClickEvent(){
      this.onRotate( parseInt(this.step) || this.defaultRotate, this.keyPress);
  }

  @HostListener("window:keydown.shift", ['$event'])
  @HostListener("window:keyup.shift", ['$event'])
  onKeyPressEvent(event: MouseEvent){
    this.keyPress = event.type === "keydown";
  }

}
