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
  constructor(public navCtrl: NavController,private dynamicService : dynamicService) {
    dynamicService.profileService()
    .subscribe(data=>this.ProfileAttrs=data.Attributes);
  }
}

