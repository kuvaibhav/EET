import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.css'],
  providers: [ColorService]
})


export class Tab3Component implements OnInit {

  public isColorDanger = false;
  constructor(private _colorService: ColorService) { }

  ngOnInit() {
  }

  changeColor() {
    if (this.isColorDanger) {
      this.isColorDanger = this._colorService.changeToBlue();
    } else {
      this.isColorDanger = this._colorService.changeToRed();
    }
  }

}
