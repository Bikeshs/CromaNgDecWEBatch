import { NgModule } from "@angular/core";
import { StartComponent } from "./start.component";
import { BrowserModule } from "@angular/platform-browser";
import { ParentComponent } from "./parent.component";
import { ChildComponent } from "./child.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { routes } from "./route.config";
import { CommonModule } from "@angular/common";
@NgModule({
    declarations: [StartComponent, ParentComponent, ChildComponent],
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
    providers: [],
    bootstrap: []
})
export class ChangeDetectionModule {

}
