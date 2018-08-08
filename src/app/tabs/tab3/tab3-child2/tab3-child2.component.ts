import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../../services/color.service';

@Component({
  selector: 'app-tab3-child2',
  templateUrl: './tab3-child2.component.html',
  styleUrls: ['./tab3-child2.component.css']
})
export class Tab3Child2Component implements OnInit {
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
