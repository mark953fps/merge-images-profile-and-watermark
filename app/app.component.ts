import { Component, ViewChild, AfterViewInit } from '@angular/core';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  implements AfterViewInit{
  @ViewChild('images') images;
  imageLink=null;

  ngAfterViewInit() {
    domtoimage.toPng(this.images.nativeElement).then(res => {
      this.imageLink = res;
    }) 
  }
}
