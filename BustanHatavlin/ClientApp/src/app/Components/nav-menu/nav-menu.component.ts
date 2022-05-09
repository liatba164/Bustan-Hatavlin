import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Categories from '../../Models/Categories';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  base_url = `https://localhost:7084/api/Categories`;
  categoryList: Categories[] = [];

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  onClkLink(navig: any) {
    
    this.router.navigate([`/${navig}`], { relativeTo: this.route }).then(() => {
      window.location.reload();
    });
  }


  public constructor(http: HttpClient, public router: Router, private route: ActivatedRoute) {
    http.get<Categories[]>(this.base_url).subscribe(res => { this.categoryList = res; })
  }
}

//interface Category {
//  id: number,
//  name: string 
//}
