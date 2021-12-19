import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //navbar bgcolor change on scroll
  navbar_change = false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      this.navbar_change=true;
    }else{
      this.navbar_change=false;
    }
  }

}
