import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

import { navbarData } from './nav-data';

interface Action{
  collapsed:boolean, 
  screenwidth:number
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.screenwidth = window.innerWidth
  }
   collapsed:boolean =  true 
   screenwidth:number = 0
   navData = navbarData;
   select:number = 0

    @HostListener('window:resize',['$event'])
    onResize(event:any){
      this.screenwidth = window.innerWidth
      if(this.screenwidth <= 768){
        this.collapsed = false
      }
    }
    selected(i:any){
      this.select = i
    }
  @Output()
  actionEvent:EventEmitter<Action> = new EventEmitter()
   

  public buttonCollapse():void{
  this.collapsed = !this.collapsed
  this.actionEvent.emit({collapsed: this.collapsed, screenwidth: this.screenwidth})
  }
  suspendCollapsed(){
    this.collapsed  = false;
    this.actionEvent.emit({collapsed: this.collapsed, screenwidth: this.screenwidth})
  }

}
