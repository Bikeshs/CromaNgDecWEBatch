import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private route: Router) {

    }
    title: 'Hello login Component';
    go() {
        this.route.navigate(['./a',1,'bikesh']);
        //this.route.navigate(['./a'],{queryParams:{id:1,name:'Bikesh'}});
    }
}