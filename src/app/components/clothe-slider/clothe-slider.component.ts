import { Component, Input, OnInit } from '@angular/core';
import { Clothe } from 'src/app/models/clothe';
import { ClotheImage } from 'src/app/models/clotheImage';
import { ClotheImageService } from 'src/app/services/clothe-image.service';

@Component({
  selector: 'app-clothe-slider',
  templateUrl: './clothe-slider.component.html',
  styleUrls: ['./clothe-slider.component.css'],
})
export class ClotheSliderComponent implements OnInit {
  @Input() clothe: Clothe;
  clotheImageUrl: string;
  clotheImage: ClotheImage;

  constructor(private clotheImageService: ClotheImageService) {}

  ngOnInit(): void {
    this.getClotheImage()
  }

  getClotheImage() {
    console.log('burdayız');

    this.clotheImageService
      .getImagesByClotheId(this.clothe.clotheId)
      .subscribe((response) => {
        console.log(response);
        this.clotheImage = response.data[0];
        this.clotheImageUrl = this.clotheImageService.getClotheImageUrl(
          this.clotheImage.id
        );
      });
  }
}
