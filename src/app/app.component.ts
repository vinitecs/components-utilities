import { Component } from '@angular/core';
interface Action{
  collapsed:boolean, 
  screenwidth:number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components-utilities';

  colapsed:boolean = false
  screnwidth:number = 0;

  actionEvent($event:any){
    this.screnwidth  = $event.screenwidth 
    this.colapsed =  $event.collapsed
  }

}
