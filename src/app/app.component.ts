import { Component, OnInit } from '@angular/core';
import { DataService } from './app.service';
import { MovieList } from './movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'app';
  number;
  addNumber;
  myList: MovieList[] = [];
  recommendation: MovieList[] = [];
  constructor(private data: DataService) {
    this.data.getData().subscribe(
      response => { 
        this.myList = response.json().mylist;
        this.recommendation = response.json().recommendations;
        }
        
  )}
  mouseenter(index: number) {
    this.number = index;
  }
  mouseleave() {
    this.number = null;
  }
  delete(some: number)
  {
  this.myList.splice(some, 1);
  }
  add(so:number)
  {
    this.myList.push(this.recommendation[so]);
    this.recommendation.splice(so, 1);
  }

  onmouseenter(event: number) {
    this.addNumber = event;
  }

  onmouseleave() {
    this.addNumber = null;
  }
  ngOnInit() {

  }

}

