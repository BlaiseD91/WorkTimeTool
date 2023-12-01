import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configSub = new BehaviorSubject({});

  constructor(private http:HttpClient) { 
    this.setLanguage('hu')
  }

  setLanguage(lang:string) {
    this.http.get('../assets/lang_' + lang + '.json').subscribe(
      (response) => this.configSub.next(response)
    )
  }



}
