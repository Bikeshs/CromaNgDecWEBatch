import { Routes } from "@angular/router";
import { StartComponent } from "./start.component";
import { ParentComponent } from "./parent.component";
export const routes: Routes = [
    { path: '', component: StartComponent },
    { path: 'parent', component: ParentComponent },
];