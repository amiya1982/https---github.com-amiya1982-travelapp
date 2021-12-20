import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-featuredtours',
  templateUrl: './featuredtours.component.html',
  styleUrls: ['./featuredtours.component.css']
})
export class FeaturedtoursComponent{

  constructor() { }

  ngOnInit(): void {
  } 

  cruiseDetails = [
    {title:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit', ship:'Amet Consectetur', price:'10,299.00', img:'assets/images/ft-ship-1.jpg'},
    {title:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit', ship:'Adipisicing Elit', price:'5,921.00', img:'assets/images/ft-ship-2.jpg'},
    {title:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit', ship:'Amet Consectetur', price:'10,299.00', img:'assets/images/ft-ship-3.jpg'},
    {title:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit', ship:'Adipisicing Elit', price:'5,921.00', img:'assets/images/ft-ship-4.jpg'},
    {title:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit', ship:'Amet Consectetur', price:'10,299.00', img:'assets/images/ft-ship-5.jpg'},
    {title:'Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit', ship:'Adipisicing Elit', price:'5,921.00', img:'assets/images/ft-ship-6.jpg'}
  ];

  //owl carousel options
  featureOptions: OwlOptions = {
    autoWidth: true,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
