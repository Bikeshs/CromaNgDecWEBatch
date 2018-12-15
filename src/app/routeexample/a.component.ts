import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: 'acomp',
    templateUrl: './a.component.html'
})
export class AComponent {
    title: 'Hello A Component';
    Id;
    name;
    constructor(private objRoute: ActivatedRoute) {
        objRoute.params.subscribe(obj => {
            this.Id = obj.id;
            this.name = obj.name;
        }
        )
    }
}