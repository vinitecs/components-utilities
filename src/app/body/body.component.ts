import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  colapsed:boolean = false;
  screnwidth :number = 0 

   @Input() 
   set collapsed (collapsed:any){
    this.colapsed  = collapsed
   }
   @Input() 
   set screenwidth (screenWidth:any){
      this.screnwidth =  screenWidth;
   }

   
     getBodyClass(){
        let classClass = ''
        if(this.collapsed && this.screenwidth > 768){
          classClass = 'body-trimed'
        } else if(this.collapsed && this.screenwidth <= 768 && this.screenwidth > 0){
          classClass = 'body-md-screen'
        }
        return classClass
    }
    }
