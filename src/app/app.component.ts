import { Component, OnInit } from '@angular/core';
import { MyNewServiceService } from './my-new-service.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  homeContent: any = {};
  constructor(
    private _myNewServiceService: MyNewServiceService,
    private _homeService: HomeService
  ) {

  }

  ngOnInit() {
    // this._myNewServiceService.getApiData();
    // .subscribe(response => {
    //     localStorage.setItem('mydata',this.dataa);
    //     this.dataa = response;
    //   console.log(this.dataa);
    // });
    this.getHomeContent();

  }

  getHomeContent() {
    this._homeService.getItem('home_content')
      .then((data) => {
        if (data) {
          this.homeContent = data.homeContent;
        } else {
          this._homeService.getApiData()
            .subscribe(response => {
              this.homeContent = response;
              this._homeService.createItem(this.homeContent);
            });
        }
      });
  }
}
