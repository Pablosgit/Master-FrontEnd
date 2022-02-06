import { Component, OnInit } from '@angular/core';
import {GaleryService} from "../../../services/galery.service";
import {Galery} from "../../../model/galeryitem";


@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})

export class GaleryComponent implements OnInit {

  imgGalery: Galery[];
  imgSelected: Galery;
  activePlay: boolean = false;
  autoPlay: any;
  zoom: number = 300;
  zoomIncrease: number = 50;
  numImgPag: number = 3;
  pagRangeA:number = 0;
  pagRangeB:number = this.numImgPag;
  nextDisabled: boolean = false;
  backDisabled: boolean = true;
  nextDisabledThumb: boolean = false;
  backDisabledThumb: boolean = true;

  constructor( private galeryService: GaleryService) {
    this.imgGalery = this.galeryService.getGalery();
    this.imgSelected = this.galeryService.getIniImg();
    this.imgSelected.selected = true;
  }

  ngOnInit():void {
  }

  onShowImg(img:Galery):void{
    this.removeSelected();
    this.imgSelected = img;
    this.imgSelected.selected = true;
    this.disabledButton();
  }

  onNavImg(direction:boolean):void{
    this.removeSelected();
    this.imgSelected = this.galeryService.navImg(this.imgSelected.id, direction);
    this.imgSelected.selected = true;
    this.disabledButton();
  }

  onNavThumbnail(pag:boolean):void{
    if(pag && this.pagRangeB <= this.imgGalery.length){
      this.pagRangeA += this.numImgPag;
      this.pagRangeB += this.numImgPag;
    } else {
      this.pagRangeA -= this.numImgPag;
      this.pagRangeB -= this.numImgPag;
    }
    this.disabledButtonThumb();
  }

  onZoomImg(simbol:boolean):void{
     if (simbol){
        this.zoom += this.zoomIncrease;
     } else {
        this.zoom -= this.zoomIncrease;
     }
  }

  onPlayImg():void{
    this.activePlay = true;
    let play = this;
    this.autoPlay = setInterval( function () {
      if (play.imgSelected.id < play.imgGalery.length) {
        play.onNavImg(play.activePlay);
      } else {
        play.removeSelected();
        play.imgSelected = play.galeryService.getIniImg();
        play.imgSelected.selected = true;
        play.disabledButton();
      }
    }, 2000);
  }

  onStopImg():void{
    this.activePlay = false;
    clearInterval(this.autoPlay);
  }

  disabledButton():void {
    this.nextDisabled = this.galeryService.disableNextButton(this.imgSelected.id);
    this.backDisabled = this.galeryService.disableBackButton(this.imgSelected.id);
  }

  removeSelected():void{
    this.imgGalery.map(img => img.selected = false);
  }

  disabledButtonThumb():void {
    this.nextDisabledThumb = this.pagRangeB >= this.imgGalery.length;
    this.backDisabledThumb = this.pagRangeA === 0;
  }

}
