import { Component, OnInit, HostListener } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  innerWidth: number = window.innerWidth;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.isChecked);
  }

  title = 'GovarthanPortfolio';
  isChecked: boolean = false;



  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    // Update the innerWidth property when the window is resized
    this.innerWidth = window.innerWidth;
    console.log('InnerWidth: ',this.innerWidth);
    if(this.innerWidth>470){
      this.isChecked = false;
    }
  }

  handleClick(){
    this.isChecked = false;
  }

  handleChecked(){
    console.log('Is Checked: ',this.isChecked);
  }

}
