import { Component, OnInit, Input } from '@angular/core';
import { DatasxService } from '../datasx.service';
import { Datasx } from '../datasx';

import { ContentList2Component } from '../content-list2/content-list2.component';

@Component({
  selector: 'datasx-detail',
  templateUrl: './datasx-detail.component.html',
  styleUrls: ['./datasx-detail.component.css']
})
export class DatasxDetailComponent implements OnInit {

  @Input() datasx: Datasx;
  
  constructor(private datasxService: DatasxService, private listComponent: ContentList2Component) { }

  ngOnInit() {
  }
  
  
  deleteDatasx() {
    this.datasxService.deleteDatasx(this.datasx.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadDatasx();
        },
        error => console.log(error));
  }


  //DELTE BELOW, ALL CAN DO
  

  updatedatasx2() {
    this.datasxService.updateDatasx2(this.datasx)
      .subscribe(datasx => console.log(datasx), error => console.log(error));
    this.datasx = new Datasx();
  }

  updatedatasx() {
    this.datasxService.updateDatasx2(this.datasx.id)
      .subscribe(datasx => console.log(datasx), error => console.log(error));
    this.datasx = new Datasx();
  }


  updateIT() {
    this.datasxService.updateDatasx(this.datasx.id,
      { datasx: this.datasx.datasx})
      .subscribe(
        data => {
          console.log(data);
          this.datasx = data as Datasx;
        },
        error => console.log(error));
  }
  


  
}
