import { Component } from "@angular/core";
import { Employee } from "./employee.model";

@Component({
    selector: 'emp-registration',
    templateUrl: './registration.component.html'
})
export class EmployeeComponent {
    employeeObj: Employee = new Employee();
    title = "Employee registration form";
    cityList = [];
    constructor() {
        this.cityList.push(
            { id: 1, value: 'Noida' },
            { id: 2, value: 'Delhi' },
            { id: 3, value: 'Lucknow' }
        )
        //var data = this.cityList.map(x => x.id == 2);
    }
    saveData(obj) {
        if (obj.form.status == "VALID") {
            alert('valid');
        }
        else {
            alert('Form Invalid');
        }
        console.log(obj);
    }
    clearRecord() {
        this.employeeObj = new Employee();
    }
    getSelectedData(obj) {
        debugger;
        var data = obj;
        console.log(obj);
    }
}