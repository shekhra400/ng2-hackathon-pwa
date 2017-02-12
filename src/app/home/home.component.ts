import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Observable } from 'rxjs/Observable';

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
    // this.getHomeContent();
    // this._homeService.checkFactory();
    // this.getHomeContentPromise();
    this.getHomeContentObservable();
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

  // getHomeContentPromise(){
  //   this._homeService.getApiDataWithPromise()
  //   .then((data: Promise<Object>) => {
  //     console.log('in promise then');
  //     console.log(data);
  //   }).catch((error: Promise<any>) => {
  //     console.log('in promise catch');
  //     console.log(error);
  //   })
  // }

  getHomeContentObservable() {
    this._homeService.getApiDataWithObservable()
    .subscribe((data: Observable<Object>) => {
      console.log('in Observable then');
      console.log(data);
      this.homeContent = data;
    }, (error: Observable<Object>) => {
      console.log('in Observable catch');
      console.log(error);
    });
  }

}
