import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DatasxService } from '../datasx.service';
import { Datasx } from '../datasx';

@Component({
  selector: 'content-list2',
  templateUrl: './content-list2.component.html',
  styleUrls: ['./content-list2.component.css']
})
export class ContentList2Component implements OnInit {

  datasx: Observable<Datasx[]>;

  constructor(private datasxService: DatasxService) { }

  ngOnInit() {
    this.reloadDatasx();
  }

  deleteDatasx() {
    this.datasxService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadDatasx();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadDatasx() {
    this.datasx = this.datasxService.getDatasxList();
  }
}
