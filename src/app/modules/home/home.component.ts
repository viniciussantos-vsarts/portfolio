import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private readonly titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Home - Portfólio: Vinicius Santos');
  }

}
