import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  he;
  bo;
  posts=[];
  constructor(private dataService: DataService) { 
    this.dataService.getData().subscribe(data => {
      this.posts=data;
    });
  }

  ngOnInit() {
  }



}
