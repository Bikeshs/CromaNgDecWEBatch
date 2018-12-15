import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: 'bcomp',
    templateUrl: './b.component.html'
})
export class BComponent {
    Id;
    name;
    constructor(private objRoute: ActivatedRoute) {
        objRoute.queryParams.subscribe(obj => {
            this.Id = obj.id;
            this.name = obj.name;
        }
        )
        title: 'Hello B Component';
    }
}