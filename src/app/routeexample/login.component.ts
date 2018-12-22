import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    Id;
    date: any;
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
    parameters: DatepickerOptions = {
        minYear: 1970,
        maxYear: 2030,
        displayFormat: 'MMM D[,] YYYY',
        barTitleFormat: 'MMMM YYYY',
        dayNamesFormat: 'dd',
        firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
        locale: frLocale,
        minDate: new Date(Date.now()), // Minimal selectable date
        //maxDate: new Date(Date.now()),  // Maximal selectable date
        barTitleIfEmpty: 'Click to select a date',
        placeholder: 'JHDGASDGSDFG', // HTML input placeholder attribute (default: '')
        addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
        addStyle: {color:'red'}, // Optional, value to pass to [ngStyle] on the input field
        fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
        useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
      };

}