import { ColorTypeService } from './../../services/color-type.service';
import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.css'],
  providers: [ColorService, ColorTypeService]
})


export class Tab3Component implements OnInit {
  colorTypes: {name: string, color: string, addName: string, addColor: string}[] = [];
  public isColorDanger = false;
  constructor(private _colorService: ColorService, private _colorTypeService: ColorTypeService) { }

  ngOnInit() {
    this.colorTypes = this._colorTypeService.types;
  }

  changeColor() {
    if (this.isColorDanger) {
      this.isColorDanger = this._colorService.changeToBlue();
    } else {
      this.isColorDanger = this._colorService.changeToRed();
    }
  }

}
