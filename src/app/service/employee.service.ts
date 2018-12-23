import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
@Injectable()
export class EmployeService {
    URL = 'https://fakerestapi.azurewebsites.net/api/Users';
    constructor(private http: Http) {
        console.log('hello Service');
    }
    getEmployeeData() {//to get data via promise        
        return this.http.get(this.URL).toPromise();
    }
    getEmployeeDataWithObservable() {//to get data via Observable        
        return this.http.get(this.URL).pipe(map(xy => {
            return xy;
        }))
    }
    saveData(userObj: any) {
        return this.http.post(this.URL, userObj).pipe(map(x => {
            return x;
        }))
    }
}