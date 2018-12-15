import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: 'child',
    templateUrl: './child.component.html'
})
export class ChildComponent {
    title: 'Hello Child Component';
    @Input() set getDatafromParent(value: any) {
        this.title = value
    }

    @Output() sendDatatoParent: EventEmitter<any> = new EventEmitter<any>();
    sendData() {
        this.sendDatatoParent.emit("Bikesh Srivastav");
    }
}