import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  homeContent: any = {};
  constructor(
    private _homeService: HomeService
  ) {

  }

  ngOnInit() {
    this.getHomeContent();
  }

  getHomeContent() {
    this._homeService.getItem('home_content')
      .then((data) => {
        if (data) {
          this.homeContent = data.homeContent;
          console.log(data);
        } else {
          this._homeService.getApiData()
            .subscribe(response => {
              this.homeContent = response;
              console.log(response);
              this._homeService.createItem(this.homeContent);
            });
        }
      });
  }

}
