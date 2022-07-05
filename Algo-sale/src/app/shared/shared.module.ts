import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/component/header.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {PopUpComponent} from "./pop-up/component/pop-up.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {DropDownSelectorComponent} from "./drop-down-selector/drop-down-selector.component";

@NgModule({
  declarations: [
    HeaderComponent,
    PopUpComponent,
    DropDownSelectorComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    HeaderComponent,
    PopUpComponent,
  ]

})
export class SharedModule {}
