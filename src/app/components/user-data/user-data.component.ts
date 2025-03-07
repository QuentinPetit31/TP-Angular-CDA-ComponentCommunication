import { Component, Input } from "@angular/core";
import { User } from "../../models/user";

//Ce component gère lui l'affichage de l'user actif.
@Component({
  selector: "app-user-data",
  templateUrl: "./user-data.component.html",
  standalone: true,
})
export class UserDataComponent {
  @Input() user!: User;
}
