import { NgModule } from "@angular/core";
import { StartComponent } from "./start.component";
import { BrowserModule } from "@angular/platform-browser";
import { ParentComponent } from "./parent.component";
import { ChildComponent } from "./child.component";
import { isComponent } from "@angular/core/src/render3/util";
import { FormsModule } from "@angular/forms";
@NgModule({
    declarations: [StartComponent, ParentComponent, ChildComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [StartComponent]
})
export class ChangeDetectionModule {

}