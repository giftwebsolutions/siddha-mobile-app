import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Category } from '../models/category.model'; // path as per your structure

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss'],
  standalone: false,
})
export class SubcategoryComponent implements OnInit, OnDestroy {
  parentId!: number;
  subCategories: Category[] = [];

  private destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
      this.parentId = Number(params.get('id'));
      this.loadSubCategories(this.parentId);
    });
  }

  loadSubCategories(parentId: number) {
    // Replace with actual API call or state service
    const allCategories: Category[] = [/* Your category list */];
    this.subCategories = allCategories.filter(cat => cat.parent_id === parentId);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
