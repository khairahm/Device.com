import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-device',
  templateUrl: './show-device.component.html',
  styleUrls: ['./show-device.component.css']
})
export class ShowDeviceComponent implements OnInit {

  constructor(private service:SharedService) { }
  DeviceSelected:any;
  DeviceList:any=[];
  DeviceFilter:any;
  DeviceWithoutFilter:any=[];
  RandomDevices: any=[];
  InfoButtonSelected:boolean= false;
  ModalTitle = "Information"
 
  rndDev:any[];
  ngOnInit(): void {
    this.refreshDepList();
  }
  refreshDepList(){
    this.service.getDeviceList().subscribe(data=>{
      this.DeviceList=data;
      this.DeviceWithoutFilter=data;
    });
  }
  Search(){
    var DeviceFilter = this.DeviceFilter

    this.DeviceList=this.DeviceWithoutFilter.filter(function(dev:any){
      return dev.Name.toString().toLowerCase().includes(DeviceFilter.toString().trim().toLowerCase())
    });
      
  }

  InfoClick(device:any,deviceArray:any[]){
    this.InfoButtonSelected=true;
    this.DeviceSelected=device;
    this.RandomDevices=[];
    for(let i =0; i<3;i++){
      var rndDevice = deviceArray[Math.floor(Math.random() * deviceArray.length)];
      this.RandomDevices.push(rndDevice);
    }
    
   
    
  }

  CloseClick(){
    this.InfoButtonSelected=false;
    this.refreshDepList();
  }
  }