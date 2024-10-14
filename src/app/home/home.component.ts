import { Component } from '@angular/core';
import { HomeDataService } from '../shared/home-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private _homeData: HomeDataService) { }

  name: string = '';
  title: string = '';
  backgroundImageUrl : string = '';

  ngOnInit(): void {
    this._homeData.name.subscribe({
      next: (data) => {
        if(data)
          this.name = data;
      }
    });
    this._homeData.title.subscribe({
      next: (data) => {
        if(data)
          this.title = data;
      }
    });
    this._homeData.image.subscribe({
      next: (data) => {
        if(data)
          this.backgroundImageUrl = data;
      }
    });

    this.updateHome();
  }



  updateHome(){
    this._homeData.getData().subscribe({
      next: (res)=>{
        if(res.name){
          this.name = res.name;
        }
        if(res.title){
          this.title = res.title;
        }
        if(res.image){
          this.backgroundImageUrl = res.image;
        }
      }
    });
  }

}
