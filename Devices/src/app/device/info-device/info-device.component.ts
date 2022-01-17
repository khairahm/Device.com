import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-info-device',
  templateUrl: './info-device.component.html',
  styleUrls: ['./info-device.component.css']
})
export class InfoDeviceComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() devSelected:any;
  @Input() rndDev:any[];
  ID:any;
  Name:any;
  Status:any;
  DeviceType:any;
  Usage:any;
  Temperature:any;
  DevicesArray:any[];
  UsagePhotoPath:any;


  ngOnInit(): void {
    this.ID= this.devSelected.ID;
    this.Name=this.devSelected.Name;
    this.Status=this.devSelected.Status;
    this.DeviceType=this.devSelected.DeviceType;
    this.Usage=this.devSelected.Usage;
    this.Temperature=this.devSelected.Temperature;
    this.DevicesArray = this.rndDev;
    this.UsagePhotoPath = this.service.PhotoUrl+this.Usage;
    
  }

}
