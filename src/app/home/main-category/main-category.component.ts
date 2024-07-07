import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../modules/category/category.service';

@Component({
  selector: 'home-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.scss'],
})
export class MainCategoryComponent  implements OnInit {

  public categories: any = [];
  constructor(
    private category: CategoryService
  ) { }

  ngOnInit() {
    this.category.getCategoryList().subscribe((response: any) => {
      this.categories = response.data;
      console.log(this.categories);
    });
  }
}
