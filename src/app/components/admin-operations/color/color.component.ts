import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[];
  colorAddForm: FormGroup;
  colorDeleteForm: FormGroup;

  constructor(
    private colorService: ColorService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.createColorOperationsForm();
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  createColorOperationsForm() {
    this.colorAddForm = this.formBuilder.group({
      colorName: ['', Validators.required],
    });
    this.colorDeleteForm = this.formBuilder.group({
      colorId:["",Validators.required]
    })
  }
  add() {
    if (this.colorAddForm.valid) {
      let colorModel = Object.assign({}, this.colorAddForm.value);
      this.colorService.addColor(colorModel).subscribe((response) => {
        this.toastr.success(response.message, 'Başarılı');
      });
    } else {
      this.toastr.error('Formunuz Eksik', 'Hata');
    }
  }

  delete(){
    if (this.colorDeleteForm.valid) {
      let colorModel = Object.assign({}, this.colorDeleteForm.value);
      this.colorService.deleteColor(colorModel).subscribe((response) => {
        this.toastr.success(response.message, 'Başarılı');
      });
    } else {
      this.toastr.error('Formunuz Eksik', 'Hata');
    }
  }
}
