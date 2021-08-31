import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Clothe } from 'src/app/models/clothe';
import { ClotheService } from 'src/app/services/clothe.service';

@Component({
  selector: 'app-clothe',
  templateUrl: './clothe.component.html',
  styleUrls: ['./clothe.component.css'],
})
export class ClotheComponent implements OnInit {
  clothes: Clothe[];
  clotheAddForm: FormGroup;
  clotheDeleteForm: FormGroup;

  constructor(
    private clotheService: ClotheService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.createClotheOperationsForm();
    this.getClothes();
  }

  getClothes() {
    this.clotheService.getAllClothes().subscribe((response) => {
      this.clothes = response.data;
    });
  }

  createClotheOperationsForm() {
    this.clotheAddForm = this.formBuilder.group({
      categoryId: ['', Validators.required],
      colorId: ['', Validators.required]
    });
    this.clotheDeleteForm = this.formBuilder.group({
      clotheId:["",Validators.required]
    })
  }
  add() {
    if (this.clotheAddForm.valid) {
      let clotheModel = Object.assign({}, this.clotheAddForm.value);
      this.clotheService.addClothe(clotheModel).subscribe((response) => {
        this.toastr.success(response.message, 'Başarılı');
      });
    } else {
      this.toastr.error('Formunuz Eksik', 'Hata');
    }
  }

  delete() {
    if (this.clotheDeleteForm.valid) {
      let clotheModel = Object.assign({}, this.clotheDeleteForm.value);
      this.clotheService.deleteClothe(clotheModel).subscribe((response) => {
        this.toastr.success(response.message, 'Başarılı');
      });
    } else {
      this.toastr.error('Formunuz Eksik', 'Hata');
    }
  }
}
