import { Routes } from "@angular/router";
import { AComponent } from "./a.component";
import { BComponent } from "./b.component";
import { CComponent } from "./c.component";
import { StartComponent } from "./start.component";
import { LoginComponent } from "./login.component";
export const routes: Routes = [
    { path: 'a/:id/:name', component: AComponent },
    { path: 'b', component: BComponent },
    { path: 'c', component: CComponent },
    { path: 'start', component: StartComponent },
    { path: 'login', component: LoginComponent },
    { path: 'otherM', loadChildren:'../changedetection/changedetection.module#ChangeDetectionModule' },
    { path: '**', component: LoginComponent },
];