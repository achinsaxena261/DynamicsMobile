import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class dynamicService {
    userInfo: any;
    hostname : string = "localhost:56521";
    constructor(private http: Http) {

    }
    loginService(id:string,pwd:string) {
        this.setId(id);
        return this.http.post('http://'+this.hostname+'/api/employee?Id='+id+'&Password='+pwd,'')
            .map(res => res.json())
    }
    profileService() {
        return this.http.get('http://'+this.hostname+'/api/employee?Id='+this.userInfo)
            .map(res => res.json())
    }
    getId(){
        return this.userInfo;
    }
    setId(Id : any){
        this.userInfo = Id;
    }

}
