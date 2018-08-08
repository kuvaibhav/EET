import { ColorTypeService } from './../../../services/color-type.service';
import { Component, OnInit, Input } from '@angular/core';
import { ColorService } from '../../../services/color.service';

@Component({
  selector: 'app-tab3-child1',
  templateUrl: './tab3-child1.component.html',
  styleUrls: ['./tab3-child1.component.css'],
  providers: [ColorService]
})
export class Tab3Child1Component implements OnInit {
  @Input() name: string;
  @Input() color: string;
  @Input() addName: string;
  @Input() addColor: string;
  public isColorDanger = true;

  constructor(private _colorService: ColorService, private  _colorTypeService: ColorTypeService) { }

  ngOnInit() {
  }

  changeColor() {
    if (this.isColorDanger) {
      this.isColorDanger = this._colorService.changeToBlue();
    } else {
      this.isColorDanger = this._colorService.changeToRed();
    }
  }

  addToColorList() {
    this._colorTypeService.addType(this.addName, this.addColor);
  }

}
