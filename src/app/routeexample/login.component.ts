import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    Id;
    constructor(private route: Router) {

    }
    title: 'Hello login Component';
    go() {
        this.route.navigate(['./a',1,'bikesh']);
        //this.route.navigate(['./b'], { queryParams: { id: this.Id, name: 'Bikesh' } });
    }
}