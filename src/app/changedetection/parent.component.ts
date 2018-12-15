import { Component } from "@angular/core";
@Component({
    selector: 'parent',
    templateUrl: './parent.component.html'
})
export class ParentComponent {
    title = 'Hello Parent Component';
    name: string = "Hello Parent";
    receiveData(obj) {
        this.name = obj;
    }
    sendToChild() {
        this.name = this.title
    }
}