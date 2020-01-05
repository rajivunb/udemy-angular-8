import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor: called');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit: header textContent = ' + this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck: called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit: called');
    console.log('ngAfterContentInit: paragraph content = ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: called');
    console.log('ngAfterViewtInit: header textContent = ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked: called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: called');
  }
}
