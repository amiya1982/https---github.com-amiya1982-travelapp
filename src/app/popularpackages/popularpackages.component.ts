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
    {title:'Ritz Acapulco Hotel', lead:'All InclusiveThe all-inclusive Ritz Acapulco Hotel offers many upgraded services and is located on a gorgeous white beach on the coast of Acapulco Bay...', img:'assets/images/img-1.jpg'},
    {title:'Copacabana', lead:'Copabacana Beach Hotel Acapulco is located in the heart of the Golden Zone.', price:'10,299.00', img:'assets/images/img-2.jpg'},
    {title:'Princess Mundo Imperial', lead:'Recognized as one of the top 500 hotels in the world and top 25 resorts in Latin America by Travel & Leisure, the Fairmont Acapulco Princess hotel rei...', price:'10,299.00', img:'assets/images/img-3.jpg'},
    {title:'Divi Aruba All Inclusive', lead:'All Inclusive2018 Exceptional Values!', price:'10,299.00', img:'assets/images/img-4.jpg'},
    {title:'Las Brisas Acapulco', lead:'Exceptional Values!Extra Value: Food and beverage credits per room, per stay: $100 on 4-6 nights; $200 on 7 nights or more (EP).', price:'10,299.00', img:'assets/images/img-5.jpg'},
    {title:'Hotel Emporio Acapulco', lead:'All InclusiveThe all-inclusive Ritz Acapulco Hotel offers many upgraded services and is located on a gorgeous white beach on the coast of Acapulco Bay...', price:'10,299.00', img:'assets/images/img-6.jpg'}
  ];

}
