import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  
  private datas:string[];
  private editcons: string[];
  private isDeleteable: boolean = false;
  private isEditable: boolean = false;

  constructor(private http: HttpClient) {


   }

  ngOnInit() {

    
    this.datas = ["bbqclub","BBQ","dddd"];
    this.editcons = this.datas;


  }

  removeData(data) {
    this.datas.forEach((element, index) => {
      if (element == data) {
        this.datas.splice(index, 1);
      }
    });
  }

  toggleDelete() {
    this.isDeleteable =! this.isDeleteable;
  }
  addData(data){
    this.datas.push(data);
    return false;
  }
  toggleEdit() {
    this.isEditable =! this.isEditable;
  }

}


