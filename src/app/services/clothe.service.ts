import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clothe } from '../models/clothe';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ClotheService {
  apiUrl=environment.apiUrl+"clothes/"

  constructor(private httpClient:HttpClient) { }
  
  addClothe(clothe:Clothe):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",clothe)
  }

  deleteClothe(clothe:Clothe):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"delete",clothe)
  }

  getClotheById(clotheId:number):Observable<SingleResponseModel<Clothe>>{
    return this.httpClient.get<SingleResponseModel<Clothe>>(this.apiUrl+"getbyid?id="+clotheId)
  }

  getAllClothes():Observable<ListResponseModel<Clothe>>{
    return this.httpClient.get<ListResponseModel<Clothe>>(this.apiUrl+"getall")
  }

  getAllClothesByWomenCategory():Observable<ListResponseModel<Clothe>>{
    return this.httpClient.get<ListResponseModel<Clothe>>(this.apiUrl+"getallbycategoryId?id=1")
  }

  getAllClothesByManCategory():Observable<ListResponseModel<Clothe>>{
    return this.httpClient.get<ListResponseModel<Clothe>>(this.apiUrl+"getallbycategoryId?id=2")
  }

  getAllClothesByBabyCategory():Observable<ListResponseModel<Clothe>>{
    return this.httpClient.get<ListResponseModel<Clothe>>(this.apiUrl+"getallbycategoryId?id=3")
  }
  
}
