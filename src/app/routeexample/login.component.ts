import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    Id;
    constructor(private route: Router) {
        localStorage.setItem('name', 'bbbbb');
        localStorage.setItem('name1', 'bbbbb1');
    }
    title: 'Hello login Component';
    go() {
        //this.route.navigate(['./a',15,'bikeshsrrrr']);
        //this.route.navigate(['./b'], { queryParams: { id: this.Id, name: 'Bikesh' } });
        this.route.navigate(['./c']);
    }
    goToOtherModule() {
        this.route.navigate(['./otherM']);

    }

}