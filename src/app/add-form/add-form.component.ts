import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {

  workingHours = [40, 30, 20];

  texts:any

  constructor(private conf:ConfigService){
    conf.getConfig().subscribe(
      (response:any) => {
        this.texts = response.addForm
      }
    )
  }

  //TODO button click event

  



}
