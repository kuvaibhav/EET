import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToasterService {

  constructor(private toastr: ToastrService) { }

  showError(errorResponse: any) {
    this.toastr.error(errorResponse.message, '', {
      positionClass: 'toast-top-full-width',
      tapToDismiss: false,
      enableHtml: true,
      extendedTimeOut: 0,
      timeOut: 0,
      closeButton: true
    });
  }

}
