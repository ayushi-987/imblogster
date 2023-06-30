import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit{
  categoryArray!: Array<any>;
  constructor(private _category: CategoriesService){}
  ngOnInit(): void {
    this._category.loadData().subscribe(val=>{console.log(val);
      this.categoryArray = val;
      })
  }

}
