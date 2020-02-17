import { Component, ViewChild, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { ContentComponent } from '../content/content.component';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements AfterViewInit {

  name="hola"
  
  @ViewChild('foo', {static: false}) pRef: ElementRef;
  @ViewChild(ContentComponent, {static: false}) hello: ContentComponent;
  @ViewChild(ContentComponent, { read: ElementRef,static: false }) private child: ElementRef;

  ngAfterViewInit() {

  }
  scroll(el: HTMLElement) {
     this.child.nativeElement.querySelector('.about').scrollIntoView();
  }


}
