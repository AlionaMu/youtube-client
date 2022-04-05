import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderDirective implements OnInit {
  @Input('appBorderColor')
  public date!: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  private setBorderColor(date: string): void {
    let color: string;
    let publishDate: Date = new Date(date);
    let dateNow: Date = new Date(Date.now());
    let dateDiff: number = Math.ceil(Math.abs(dateNow.getTime() - publishDate.getTime())
     / (1000 * 3600 * 24));
    if (dateDiff < 7) {
      color = 'blue';
    } else if (dateDiff >= 7 && dateDiff < 30) {
      color = 'green';
    } else if (dateDiff >= 30 && dateDiff < 180) {
      color = 'yellow';
    } else {
      color = 'red';
    }
    this.renderer2.setStyle(this.elementRef.nativeElement, 'border-bottom', `5px solid ${color}`);
  }

  public ngOnInit(): void {
    this.setBorderColor(this.date);
  }
}