import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { dynamicService } from '../../services/service';
import 'rxjs/Rx';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  ProfileAttrs : any;
  UserInfo : profileData = { name : null,department: null,designation: null,location: null,organization: null };
  constructor(public navCtrl: NavController,private dynamicService : dynamicService) {
    dynamicService.profileService()
    .subscribe(data=>this.formatProfileData(data));
  }
  formatProfileData(data:any){
    this.ProfileAttrs=data.Attributes;
    this.ProfileAttrs.forEach(element => {
      if(element.Key == "new_legalname"){
        this.UserInfo.name = element.Value;
      }
      else if(element.Key == "new_designation"){
        this.UserInfo.designation = element.Value.Name;
      }
      else if(element.Key == "new_organization"){
        this.UserInfo.organization = element.Value;
      }
      else if(element.Key == "new_dept"){
        this.UserInfo.department = element.Value.Name;
      }   
      else if(element.Key == "new_worklocation"){
        this.UserInfo.location = element.Value;
      }            
      else{

      }
    });
  }
}

interface profileData{
  name : string,
  designation : string,
  location : string,
  organization : string,
  department : string
}
