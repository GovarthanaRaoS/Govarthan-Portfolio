import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent {

  @Input() isChecked = true;
  @Output() isCheckedEvent = new EventEmitter<boolean>();
  
}
