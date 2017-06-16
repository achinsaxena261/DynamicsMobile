import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { dynamicService } from '../../services/service';

import 'rxjs/Rx';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  id:string;
  pwd:string;
  submitted : boolean;
  constructor(public navCtrl: NavController,private dynamicService:dynamicService) {
    this.submitted = false;
  }

  public Login(id: string, pwd: string) {
    this.submitted = true;
    this.dynamicService.loginService(id,pwd)
    .subscribe(data=>this.ValidateUser(data));
  }

  ValidateUser(data:any){
    this.submitted = false;
    if(data == "success"){
      this.navCtrl.push(TabsPage);
    }
    else{
      window.alert("Invalid username or password");
    }
  }
}
