import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClotheImage } from '../models/clotheImage';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ClotheImageService {
  apiUrl=environment.apiUrl+"clotheimages/"
  nmbr:number=0

  constructor(private httpClient:HttpClient) { }

  addClotheImage(clotheImage:ClotheImage):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",clotheImage)
  }

  getImagesByClotheId(id:number):Observable<ListResponseModel<ClotheImage>>{
    return this.httpClient.get<ListResponseModel<ClotheImage>>(this.apiUrl+"getclotheimagebyclotheid?id="+id)
  }

  getClotheImageUrl(id: number): string {
    return this.apiUrl+"getfilebyid?id="+id
  }

  getClotheImages():Observable<ListResponseModel<ClotheImage>>{
    return this.httpClient.get<ListResponseModel<ClotheImage>>(this.apiUrl+"getall")
  }
}
