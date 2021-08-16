import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>(); // to create an object with an eventemitter class
  // output decorator, allows us to use it from the parent component
  onSelect(feature: string){
    this.featureSelected.emit(feature)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
