import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  categoryAddForm: FormGroup;
  categoryDeleteForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createCategoryOperationsForm();
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getColors().subscribe((response) => {
      this.categories = response.data;
    });
  }

  createCategoryOperationsForm() {
    this.categoryAddForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
    });
    this.categoryDeleteForm = this.formBuilder.group({
      categoryId: ['', Validators.required],
    });
  }

  add() {
    if (this.categoryAddForm.valid) {
      let categoryModel = Object.assign({}, this.categoryAddForm.value);
      this.categoryService.addCategory(categoryModel).subscribe((response) => {
        this.toastr.success(response.message, 'Başarılı');
      });
    } else {
      this.toastr.error('Formunuz Eksik', 'Hata');
    }
  }

  delete() {
    if (this.categoryDeleteForm.valid) {
      let categoryModel = Object.assign({}, this.categoryDeleteForm.value);
      this.categoryService
        .deleteCategory(categoryModel)
        .subscribe((response) => {
          this.toastr.success(response.message, 'Başarılı');
        });
    } else {
      this.toastr.error('Formunuz Eksik', 'Hata');
    }
  }
}
