import { Injectable } from '@angular/core';
import {Galery} from "../model/galeryitem"
import {galeryItem} from "../data/data.galery"

@Injectable({
  providedIn: 'root'
})
export class GaleryService {

  galery: Galery[] = [];

  constructor() { }

  getGalery():Galery[]{
    return this.galery = galeryItem;
  }

  getIniImg():Galery{
    return this.galery.filter(img => img.id === 1)[0]
  }

  navImg(idImg:number,direction: boolean):Galery{
    idImg = direction? idImg+1 : idImg-1;
    return this.galery.filter(img => img.id === idImg)[0];
  }

  disableNextButton(idImg:number):boolean{
    return  idImg >= this.galery.length;
  }

  disableBackButton(idImg:number):boolean{
    return  idImg === 1;
  }





}
