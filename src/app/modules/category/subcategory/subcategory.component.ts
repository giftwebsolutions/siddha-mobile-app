import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss'],
})
export class SubcategoryComponent  implements OnInit {

  public categories:any = [];
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
