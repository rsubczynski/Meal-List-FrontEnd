import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fail } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'mealList';
  connected = "false"

  configUrl = 'https://meal-list-backend.herokuapp.com/';


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.configUrl).subscribe(
      (test) => {
        this.connected = "true";
        console.log(test)
      },
      (fail) => {
        this.connected = "server is dead"
        console.log(fail)
      }
    );
  }

}
