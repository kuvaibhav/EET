import { EventEmitter, Injectable } from '@angular/core';

export class ColorService {

  showText = new EventEmitter<string>();

  changeToRed() {
    return true;
  }

  changeToBlue() {
    return false;
  }
}

