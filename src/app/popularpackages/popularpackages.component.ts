import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popularpackages',
  templateUrl: './popularpackages.component.html',
  styleUrls: ['./popularpackages.component.css']
})
export class PopularpackagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  packageDetails = [
    {title:'Title Goes here...', lead:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit...', img:'assets/images/img-1.jpg'},
    {title:'Title Goes here...', lead:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit...', img:'assets/images/img-2.jpg'},
    {title:'Title Goes here...', lead:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit...', img:'assets/images/img-3.jpg'},
    {title:'Title Goes here...', lead:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit...', img:'assets/images/img-4.jpg'},
    {title:'Title Goes here...', lead:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit...', img:'assets/images/img-5.jpg'},
    {title:'Title Goes here...', lead:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit...', img:'assets/images/img-6.jpg'}
  ];

}
