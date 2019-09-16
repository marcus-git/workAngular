import { Component, OnInit } from '@angular/core';

import { Datasx } from '../datasx';
import { DatasxService } from '../datasx.service';

@Component({
  selector: 'add-content2',
  templateUrl: './add-content2.component.html',
  styleUrls: ['./add-content2.component.css']
})
export class AddContent2Component implements OnInit {

  datasx: Datasx = new Datasx();
  submitted = false;

  constructor(private datasxService: DatasxService) { }

  ngOnInit() {
  }

  newDatasx(): void {
    this.submitted = false;
    this.datasx = new Datasx();
  }

  save() {
    this.datasxService.createDatasx(this.datasx)
      .subscribe(datasx => console.log(datasx), error => console.log(error));
    this.datasx = new Datasx();
  }


  onSubmit() {
    this.submitted = true;
    this.save();
    
  }
}
