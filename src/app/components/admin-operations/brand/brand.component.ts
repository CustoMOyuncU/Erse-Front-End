import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brand[];
  brandAddForm: FormGroup;
  brandDeleteForm: FormGroup;

  constructor(
    private brandService: BrandService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createBrandOperationsForm();
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  createBrandOperationsForm() {
    this.brandAddForm = this.formBuilder.group({
      brandName: ['', Validators.required],
    });
    this.brandDeleteForm = this.formBuilder.group({
      brandId: ['', Validators.required],
    });
  }

  add() {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      this.brandService.addBrand(brandModel).subscribe((response) => {
        this.toastr.success(response.message, 'Başarılı');
      });
    } else {
      this.toastr.error('Formunuz Eksik', 'Hata');
    }
  }

  delete() {
    if (this.brandDeleteForm.valid) {
      let brandModel = Object.assign({}, this.brandDeleteForm.value);
      this.brandService
        .deleteBrand(brandModel)
        .subscribe((response) => {
          this.toastr.success(response.message, 'Başarılı');
        });
    } else {
      this.toastr.error('Formunuz Eksik', 'Hata');
    }
  }
}
