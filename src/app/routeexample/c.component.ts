import { Component,Pipe } from "@angular/core";
@Component({
    selector: 'ccomp',
    templateUrl: './c.component.html'
})
export class CComponent {
    title = 'Hello C Component';
    DOB;
    amt;
    constructor() {
        this.title = "Bikesh Srivastava";
        this.DOB = new Date('08/20/2018');
        this.amt = "1542";        
    }
}