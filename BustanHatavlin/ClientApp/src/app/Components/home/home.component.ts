import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  imgArr: {path:string, src: string, name: string }[] = [
    { "path": "Products/1", "src":"assets/TavlinimHome.jpg" , "name": "תבלינים" },
    { "path": "Products/2", "src": "assets/PitzuchimHome.jpg", "name": "פיצוחים" },
    { "path": "Products/3", "src": "assets/kitniyutHome.jpg", "name": "קטניות" },
    { "path": "Products/4", "src": "assets/dryFruitHome.jpg", "name": "פירות יבשים" },
    { "path": "Products/5", "src": "assets/retavimHome.jpg", "name": "רטבים" },


];

    //('', ''),(), (), ()];
    //, , "", "", "", "a"];

  public constructor() {

  }



}

interface Iimage {
  src: string,
  name:string,
}
