import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'mealList';
  connected = "false"

  configUrl = 'https://meal-list-backend.herokuapp.com/gretting';


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.configUrl).subscribe(
      (test) => {
        this.connected = "true";
      },
      (fail) => {
        this.connected = "server is dead"
        console.log(fail)
      }
    );
  }
}
