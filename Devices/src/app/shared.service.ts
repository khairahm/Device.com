import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:5000/api"
  readonly PhotoUrl = "http://localhost:5000/Images/"
  constructor(private http:HttpClient) {}

    getDeviceList(): Observable<any[]>{
        return this.http.get<any>(this.APIUrl +'/device');
    }

    selectDevice(val:any){
      return this.http.get(this.APIUrl + '/device',val)
    }

    UploadPhoto(val:any){
      return this.http.post(this.APIUrl+ '/device/SaveFile', val)
    }
   
}
