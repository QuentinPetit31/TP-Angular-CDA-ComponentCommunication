import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ActiveUserComponent } from "../active-user/active-user.component";
import { UserDataComponent } from "../user-data/user-data.component";

//Ce composant agit comme un conteneur,il gère les données de l'utilisateur actif.
@Component({
  selector: "app-component-communication",
  standalone: true,
  templateUrl: "./component-communication.component.html",
  imports: [CommonModule, FormsModule, ActiveUserComponent, UserDataComponent],
})
export class ComponentCommunicationComponent {
  activeUser = { name: "Eddie Murphy", age: 63 };

  updateUser(newUser: { name: string; age: number }) {
    this.activeUser = newUser;
  }
}
