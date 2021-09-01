import { Component, OnInit } from '@angular/core';
import { Clothe } from 'src/app/models/clothe';
import { ClotheImage } from 'src/app/models/clotheImage';
import { ClotheImageService } from 'src/app/services/clothe-image.service';
import { ClotheService } from 'src/app/services/clothe.service';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css'],
})
export class ShowroomComponent implements OnInit {
  womenClothes: Clothe[];
  dataLoaded:boolean =false

  constructor(private clotheService: ClotheService) {}

  ngOnInit(): void {
    this.getClothesByWomenCategory();
  }

  getClothesByWomenCategory() {
    this.clotheService.getAllClothesByWomenCategory().subscribe((response) => {
      this.womenClothes = response.data;
      this.dataLoaded=true
      console.log(this.womenClothes);
    });
  }

  /* getClotheImage(nmbr:number) {
      console.log("burdayız")
      
      this.clotheImageService.getImagesByClotheId(this.clothes[nmbr].clotheId).subscribe ((response) => {
        console.log(response)
      this.clotheImage = response.data[0];
      this.clotheImageUrl = this.clotheImageService.getClotheImageUrl(
        this.clotheImage.id
      );
    });
    
    
  } */
}
