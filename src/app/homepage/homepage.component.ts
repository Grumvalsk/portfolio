import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  slides: any[] = [
    { id: 0, src: './assets/img/angular.jpg', title: 'First slide', subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.' },
    { id: 1, src: './assets/img/react.jpg', title: 'Second slide', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, src: './assets/img/vue.jpg', title: 'Third slide', subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.' }
  ];

}
