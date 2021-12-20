import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  blogDetails = [
    {
      title:'Blog Title Goes Here...', 
      lead:'Lorem ipsum dolor sit amet consectetur adipisicing elit quidem laborum pariatur alias.', 
      date:'21st May, 2021', 
      name: 'John Doe',
      img:'assets/images/img-1.jpg'
    },
    {
      title:'Blog Title Goes Here...', 
      lead:'Lorem ipsum dolor sit amet consectetur adipisicing elit quidem laborum pariatur alias.', 
      date:'21st May, 2021', 
      name: 'John Doe',
      img:'assets/images/img-2.jpg'
    },
    {
      title:'Blog Title Goes Here...', 
      lead:'Lorem ipsum dolor sit amet consectetur adipisicing elit quidem laborum pariatur alias.', 
      date:'21st May, 2021', 
      name: 'John Doe',
      img:'assets/images/img-3.jpg'
    },
    {
      title:'Blog Title Goes Here...', 
      lead:'Lorem ipsum dolor sit amet consectetur adipisicing elit quidem laborum pariatur alias.', 
      date:'21st May, 2021', 
      name: 'John Doe',
      img:'assets/images/img-4.jpg'
    },
    {
      title:'Blog Title Goes Here...', 
      lead:'Lorem ipsum dolor sit amet consectetur adipisicing elit quidem laborum pariatur alias.', 
      date:'21st May, 2021', 
      name: 'John Doe',
      img:'assets/images/img-5.jpg'
    },
    {
      title:'Blog Title Goes Here...', 
      lead:'Lorem ipsum dolor sit amet consectetur adipisicing elit quidem laborum pariatur alias.', 
      date:'21st May, 2021', 
      name: 'John Doe',
      img:'assets/images/img-6.jpg'
    }
  ];

  //owl carousel options
  blogOptions: OwlOptions = {
    autoWidth: true,
    autoplay: false,
    autoplayHoverPause: false,
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
        items: 3
      }
    },
    nav: true
  }

}
