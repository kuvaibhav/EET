import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.component.html',
  styleUrls: ['./tab4.component.css']
})
export class Tab4Component implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const userId = this.route.snapshot.queryParams['id'];

    if (userId) {
      console.log(userId);
    }
  }

}
