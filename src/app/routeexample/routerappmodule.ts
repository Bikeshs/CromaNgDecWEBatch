import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StartComponent } from "./start.component"; import { BrowserModule } from "@angular/platform-browser";
import { AComponent } from "./a.component";
import { BComponent } from "./b.component";
import { CComponent } from "./c.component";
import { LoginComponent } from "./login.component";
import { routes } from './route.config';
import { FormsModule } from "@angular/forms";
import { AgeCountPipe } from "../pipe/agecount.pipe";
import { NgDatepickerModule } from 'ng2-datepicker';
import { EmployeService } from "../service/employee.service";
import { HttpModule } from "@angular/http";
@NgModule({
    declarations: [AgeCountPipe, LoginComponent, StartComponent, AComponent, BComponent, CComponent],
    imports: [HttpModule, NgDatepickerModule, BrowserModule, FormsModule, RouterModule.forRoot(routes)],
    providers: [EmployeService],
    bootstrap: [StartComponent]
})
export class RouterAppModule {

}