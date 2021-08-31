import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClotheImage } from 'src/app/models/clotheImage';
import { ClotheImageService } from 'src/app/services/clothe-image.service';

@Component({
  selector: 'app-clothe-image',
  templateUrl: './clothe-image.component.html',
  styleUrls: ['./clothe-image.component.css']
})
export class ClotheImageComponent implements OnInit {
  clotheImages: ClotheImage[];
  clotheImageAddForm: FormGroup;
  clotheImageDeleteForm: FormGroup;

  shortLink: string
    loading: boolean = false; // Flag variable
    file: File; // Variable to store file

  constructor(
    private clotheImageService: ClotheImageService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.createClotheImageOperationsForm();
    this.getClotheImages();
  }

  getClotheImages() {
    this.clotheImageService.getClotheImages().subscribe((response) => {
      this.clotheImages = response.data;
    });
  }

  createClotheImageOperationsForm() {
    this.clotheImageAddForm = this.formBuilder.group({
      image: ['', Validators.required],
      clotheId: ['', Validators.required]
    });
    this.clotheImageDeleteForm = this.formBuilder.group({
      clotheImageId:["",Validators.required]
    })
  }
  add() {
    if (this.clotheImageAddForm.valid) {
      let clotheImageModel = Object.assign({}, this.clotheImageAddForm.value);
      this.clotheImageService.addClotheImage(clotheImageModel).subscribe((response) => {
        this.toastr.success(response.message, 'Başarılı');
      });
    } else {
      this.toastr.error('Formunuz Eksik', 'Hata');
    }
  }

  /* delete() {
    if (this.clotheImageDeleteForm.valid) {
      let clotheImageModel = Object.assign({}, this.clotheImageDeleteForm.value);
      this.clotheImageService.deleteClotheImage(clotheImageImageModel).subscribe((response) => {
        this.toastr.success(response.message, 'Başarılı');
      });
    } else {
      this.toastr.error('Formunuz Eksik', 'Hata');
    }
  } */

 /*  onChange(event: { target: { files: File[]; }; }) {
    this.file = event.target.files[0];
}

// OnClick of button Upload
onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.clotheImageService.upload(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;

                this.loading = false; // Flag variable 
            }
        }
    );
} */
}
