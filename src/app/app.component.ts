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

  configUrl = 'https://meal-list-backend.herokuapp.com/';


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.configUrl).subscribe(
      () => {
        this.connected = "true";
      },
      () => this.connected = "server is dead"
    );
  }

}
